type ButtonProps = {
  text: string;
  isBlue: boolean;
};

export default function Button({ text, isBlue }: ButtonProps) {
  return (
    <p
      className={`flex gap-3 px-8.5 py-2.75 rounded-[60px] ${isBlue ? "bg-[#103FD5] text-white" : "text-[#103FD5] bg-[#E0E7F2]"}  w-fit mb-7`}
    >
      <img src="/logo/handshake.png" alt="" />
      <span>{text}</span>
    </p>
  );
}
