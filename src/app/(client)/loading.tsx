export default function Loading() {
  return (
    <div
      className="fixed flex top-0 left-0 z-[999] w-full h-svh page-loader bg-background"
    >
      <div className="w-[50px] h-[50px] rounded-full border-4 border-neutral/10 border-t-neutral m-auto will-change-transform animate-spin" />
    </div>
  );
}
