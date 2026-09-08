const paths: Record<string, string> = {
  arrow: "M5 12h14m-6-6 6 6-6 6",
  chart: "M4 3v17h17M7 14l4-4 4 2 5-7",
  import: "M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5",
  cloud: "M7 19a5 5 0 1 1 .8-9.9A6 6 0 0 1 19.7 10 4.5 4.5 0 0 1 18 19H7Z",
  watch: "M8 2h8l1 4M8 22h8l1-4M7 6l1-4M7 18l1 4M6 6h12v12H6zM12 9v3l2 1",
  shield: "M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4ZM8 12l3 3 5-6",
  apple:
    "M16.6 12.8c0-2 1.7-3 1.8-3.1-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.2.8-.6 0-1.6-.8-2.7-.7-1.4 0-2.7.8-3.4 2-1.4 2.4-.4 5.9 1 7.9.7 1 1.5 2.1 2.5 2.1 1 0 1.4-.7 2.7-.7 1.2 0 1.6.7 2.7.7 1.1 0 1.8-1 2.4-2 .8-1.1 1.1-2.2 1.1-2.3-.1 0-1.9-.7-1.9-3.1ZM14.5 6.8c.6-.8 1.1-1.8 1-2.8-.9 0-2 .6-2.7 1.3-.6.7-1.2 1.7-1.1 2.7 1 .1 2.1-.5 2.8-1.2Z",
};
export function Icon({ name }: { name: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill={name === "apple" ? "currentColor" : "none"}
      stroke={name === "apple" ? "none" : "currentColor"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[name] ?? paths.chart} />
    </svg>
  );
}
