function LineText({ children }: { children: string }) {
  return (
    <div className="mb-2 mt-2 flex w-full items-center gap-4">
      <span className="h-[2px] basis-full bg-gray-500">&nbsp;</span>
      {children}
      <span className="h-[2px] basis-full bg-gray-500">&nbsp;</span>
    </div>
  );
}

export default LineText;
