declare module "aos" {
  interface AosOptions {
    duration?: number;
    easing?: string;
    once?: boolean;
    offset?: number;
    delay?: number;
    mirror?: boolean;
    anchorPlacement?: string;
  }

  function init(options?: AosOptions): void;
  function refresh(initialize?: boolean): void;
  function refreshHard(): void;

  export { init, refresh, refreshHard };
  export default { init, refresh, refreshHard };
}
