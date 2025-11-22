import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { CreditCard, TrendingUp, ArrowRight, ArrowLeft, Plus } from "lucide-react";
import type { BankAccount, BankCard, Transaction } from "@shared/schema";

export default function BankDashboardPage() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [searchEmail, setSearchEmail] = useState("");

  const { data: accounts = [] } = useQuery({
    queryKey: ["/api/bank/accounts", searchEmail],
    queryFn: () =>
      searchEmail
        ? fetch(`/api/bank/accounts/${searchEmail}`).then((res) => res.json())
        : Promise.resolve([]),
    enabled: !!searchEmail,
  });

  const { data: selectedAccountCards = [] } = useQuery({
    queryKey: ["/api/bank/cards", accounts[0]?.id],
    queryFn: () =>
      accounts[0]
        ? fetch(`/api/bank/accounts/${accounts[0].id}/cards`).then((res) => res.json())
        : Promise.resolve([]),
    enabled: !!accounts[0],
  });

  const { data: selectedAccountTransactions = [] } = useQuery({
    queryKey: ["/api/bank/transactions", accounts[0]?.id],
    queryFn: () =>
      accounts[0]
        ? fetch(`/api/bank/transactions/${accounts[0].id}`).then((res) => res.json())
        : Promise.resolve([]),
    enabled: !!accounts[0],
  });

  const cardMutation = useMutation({
    mutationFn: async (accountId: string) => {
      const account = accounts.find((a: BankAccount) => a.id === accountId);
      if (!account) throw new Error("Account not found");
      
      const response = await fetch("/api/bank/cards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accountId,
          cardholderName: `${account.firstName} ${account.lastName}`,
          cardType: "debit",
        }),
      });
      if (!response.ok) throw new Error("Failed to create card");
      return response.json();
    },
    onSuccess: (card: BankCard) => {
      toast({
        title: "Card Ordered Successfully!",
        description: `Your ${card.cardType} card ending in ${card.cardNumber.slice(-4)} has been ordered. It will arrive in 5-7 business days.`,
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to order card. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSearch = () => {
    if (email) {
      setSearchEmail(email);
    }
  };

  const handleOrderCard = (accountId: string) => {
    cardMutation.mutate(accountId);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <Link href="/bank">
          <Button variant="ghost" className="mb-8 gap-2" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
            Back to Bank
          </Button>
        </Link>

        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Access Your Accounts</CardTitle>
            <CardDescription>Enter your email to view your accounts and cards</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="input-search-email"
              />
              <Button onClick={handleSearch} data-testid="button-search">
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Accounts Section */}
        {accounts.length > 0 && (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Accounts</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {accounts.map((account: BankAccount) => (
                  <Card key={account.id} className="hover-elevate">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{account.firstName} {account.lastName}</CardTitle>
                          <CardDescription capitalize>{account.accountType} Account</CardDescription>
                        </div>
                        <Badge>{account.status}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Account Number</p>
                        <p className="font-mono font-semibold">{account.accountNumber}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Balance</p>
                        <p className="text-2xl font-bold">${parseFloat(account.balance).toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Created</p>
                        <p className="text-sm">{new Date(account.createdAt).toLocaleDateString()}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cards Section */}
            {accounts[0] && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Your Cards</h2>
                  <Button 
                    onClick={() => handleOrderCard(accounts[0].id)}
                    disabled={cardMutation.isPending}
                    className="gap-2"
                    data-testid="button-order-card"
                  >
                    <Plus className="w-4 h-4" />
                    {cardMutation.isPending ? "Ordering..." : "Order New Card"}
                  </Button>
                </div>

                {selectedAccountCards.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {selectedAccountCards.map((card: BankCard) => (
                      <Card key={card.id} className="bg-gradient-to-br from-primary/10 to-accent/10">
                        <CardContent className="pt-6">
                          <div className="space-y-4">
                            <div className="flex justify-between items-start">
                              <CreditCard className="w-8 h-8 text-primary" />
                              <Badge>{card.cardType}</Badge>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Card Number</p>
                              <p className="font-mono font-semibold text-lg">
                                •••• •••• •••• {card.cardNumber.slice(-4)}
                              </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-xs text-muted-foreground">Cardholder</p>
                                <p className="font-semibold text-sm">{card.cardholderName}</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground">Expiry</p>
                                <p className="font-semibold text-sm">{card.expiryDate}</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="w-full justify-center">
                              {card.status}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <p className="text-muted-foreground mb-4">No cards yet. Order your first card now!</p>
                      <Button 
                        onClick={() => handleOrderCard(accounts[0].id)}
                        data-testid="button-order-first-card"
                      >
                        Order Card
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}

            {/* Transactions Section */}
            {accounts[0] && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
                {selectedAccountTransactions.length > 0 ? (
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        {selectedAccountTransactions.map((txn: Transaction) => (
                          <div key={txn.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                            <div className="flex items-center gap-3">
                              <div className="bg-primary/10 p-2 rounded-lg">
                                {txn.type === "deposit" ? (
                                  <ArrowLeft className="w-4 h-4 text-green-600" />
                                ) : (
                                  <ArrowRight className="w-4 h-4 text-red-600" />
                                )}
                              </div>
                              <div>
                                <p className="font-semibold capitalize">{txn.type}</p>
                                <p className="text-sm text-muted-foreground">{txn.description}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className={`font-semibold ${txn.type === "deposit" ? "text-green-600" : "text-red-600"}`}>
                                {txn.type === "deposit" ? "+" : "-"}${Math.abs(parseFloat(txn.amount)).toFixed(2)}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {new Date(txn.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <p className="text-muted-foreground">No transactions yet</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </>
        )}

        {!searchEmail && (
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary opacity-50" />
              <p className="text-muted-foreground">Enter your email above to access your accounts</p>
            </CardContent>
          </Card>
        )}

        {searchEmail && accounts.length === 0 && (
          <Card className="text-center">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-4">No accounts found for this email</p>
              <Link href="/bank/open-account">
                <Button data-testid="button-create-account">Create Account</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}
