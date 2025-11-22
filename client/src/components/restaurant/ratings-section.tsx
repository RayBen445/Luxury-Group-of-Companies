import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";

interface Rating {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

const initialRatings: Rating[] = [
  { id: 1, author: "James M.", rating: 5, comment: "Absolutely incredible experience! Every dish was perfection.", date: "2024-11-20" },
  { id: 2, author: "Sophie L.", rating: 5, comment: "Best restaurant in the city. Impeccable service and food.", date: "2024-11-18" },
  { id: 3, author: "Michael C.", rating: 4, comment: "Fantastic meals and great atmosphere. Highly recommend!", date: "2024-11-15" },
];

export function RatingsSection() {
  const [ratings, setRatings] = useState<Rating[]>(initialRatings);
  const [formData, setFormData] = useState({ author: "", rating: 5, comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.author && formData.comment) {
      const newRating: Rating = {
        id: ratings.length + 1,
        author: formData.author,
        rating: formData.rating,
        comment: formData.comment,
        date: new Date().toISOString().split('T')[0],
      };
      setRatings([newRating, ...ratings]);
      setFormData({ author: "", rating: 5, comment: "" });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const avgRating = (ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length).toFixed(1);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-ratings">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Badge className="mb-4" data-testid="badge-ratings">Guest Reviews</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-ratings-title">
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6" data-testid="container-avg-rating">
            <div className="text-4xl font-bold" data-testid="text-avg-rating">{avgRating}</div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${i < Math.round(parseFloat(avgRating)) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  data-testid={`icon-star-${i}`}
                />
              ))}
            </div>
            <div className="text-muted-foreground ml-2" data-testid="text-rating-count">
              Based on {ratings.length} reviews
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-4" data-testid="container-ratings-list">
            {ratings.map((rating) => (
              <Card key={rating.id} className="hover-elevate" data-testid={`card-rating-${rating.id}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold" data-testid={`text-rating-author-${rating.id}`}>{rating.author}</h4>
                      <p className="text-sm text-muted-foreground" data-testid={`text-rating-date-${rating.id}`}>{rating.date}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < rating.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          data-testid={`icon-rating-star-${rating.id}-${i}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground" data-testid={`text-rating-comment-${rating.id}`}>{rating.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="h-fit" data-testid="card-rating-form">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4" data-testid="text-write-review">Leave a Review</h3>
              <form onSubmit={handleSubmit} className="space-y-4" data-testid="form-rating">
                <div>
                  <label className="text-sm font-medium" data-testid="label-name">Your Name</label>
                  <Input
                    value={formData.author}
                    onChange={(e) => setFormData({...formData, author: e.target.value})}
                    placeholder="John Doe"
                    data-testid="input-rating-name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium" data-testid="label-rating">Rating</label>
                  <select
                    value={formData.rating}
                    onChange={(e) => setFormData({...formData, rating: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 rounded-md border bg-background"
                    data-testid="select-rating"
                  >
                    <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
                    <option value="4">⭐⭐⭐⭐ 4 Stars</option>
                    <option value="3">⭐⭐⭐ 3 Stars</option>
                    <option value="2">⭐⭐ 2 Stars</option>
                    <option value="1">⭐ 1 Star</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium" data-testid="label-comment">Your Review</label>
                  <Textarea
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    placeholder="Share your experience..."
                    rows={4}
                    data-testid="textarea-rating"
                  />
                </div>
                <Button type="submit" className="w-full" data-testid="button-submit-rating">
                  Submit Review
                </Button>
                {submitted && (
                  <p className="text-green-600 dark:text-green-400 text-sm" data-testid="text-rating-submitted">
                    ✓ Review submitted!
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
