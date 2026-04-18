import Wrapper from "@/components/wrapper";
import Link from "next/link";
import Image from "next/image";
import { TbMapPin, TbWifi, TbBriefcase, TbBolt } from "react-icons/tb";

/* ── Types ── */
interface Job {
  id: number;
  companyLogo: string;
  title: string;
  location: string;
  workType: string;
  salary: string | null;
  applyUrl: string;
}

/* ── Job data — swap [] to see empty state ── */
const JOBS: Job[] = [
  {
    id: 1,
    companyLogo: "/logo/logo.png",
    title: "Brand Designer",
    location: "Lagos Nigeria",
    workType: "Remote-Only",
    salary: null,
    applyUrl: "/contact",
  },
  {
    id: 2,
    companyLogo: "/logo/logo.png",
    title: "Junior dev",
    location: "Lagos Nigeria",
    workType: "Hybrid",
    salary: "150k",
    applyUrl: "/contact",
  },
];

/* ── Tag pill ── */
const Tag = ({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) => (
  <span className="inline-flex items-center gap-1 text-[12px] text-[#6b7280]">
    <Icon size={13} className="text-[#9ca3af] flex-shrink-0" />
    {label}
  </span>
);

/* ── Job row ── */
const JobRow = ({ job, last }: { job: Job; last: boolean }) => (
  <div
    className={`flex items-center justify-between gap-4 py-5 ${
      !last ? "border-b border-[#eeeeee]" : ""
    }`}
  >
    {/* Left: logo + info */}
    <div className="flex items-center gap-4 min-w-0">
      {/* Logo bubble */}
      <div className="flex-shrink-0 w-[46px] h-[46px] rounded-[10px] bg-[#0d0d0d] overflow-hidden flex items-center justify-center p-[9px]">
        <Image
          src={job.companyLogo}
          alt={job.title}
          width={28}
          height={28}
          className="object-contain"
        />
      </div>

      {/* Title + tags */}
      <div className="flex flex-col gap-1.5 min-w-0">
        <p className="font-bold text-[14.5px] text-[#111827] leading-tight">
          {job.title}
        </p>
        <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1">
          <Tag icon={TbMapPin} label={job.location} />
          <Tag icon={TbWifi} label={job.workType} />
          <Tag icon={TbBriefcase} label={job.salary ?? "Not defined"} />
        </div>
      </div>
    </div>

    {/* Apply Now button */}
    <Link
      href={job.applyUrl}
      className="flex-shrink-0 inline-flex items-center gap-1.5 bg-[#103FD5] hover:bg-[#0c2fa3] active:scale-[0.97] transition-all duration-200 text-white text-[12.5px] font-bold px-4 py-2.5 rounded-[40px] whitespace-nowrap"
    >
      Apply Now
      <TbBolt size={14} />
    </Link>
  </div>
);

const CareerPage = () => {
  const jobs = JOBS;

  return (
    <Wrapper>
      <div className="max-w-6xl mx-auto">
      <section className="bg-[#F9F9F9] pt-5 pb-10 md:pt-10 md:pb-10">
        <div className="container mx-auto px-6">
          <div className="space-y-4">
            <h1
              className="font-extrabold leading-[1.1] tracking-[-0.03em] text-[#0d0d0d]"
              style={{ fontSize: "clamp(2rem, 3.2vw, 2.85rem)" }}
            >
              Join our companies and solve problems of the future.
            </h1>
            <p className="text-[#6b7280] text-[13.5px] leading-[1.75] max-w-5xl">
              At Spur Wiz, we don&apos;t chase trends we build structure. We work on
              complex problems, design disciplined systems, and help ambitious
              products grow with intention. If you care about precision, impact,
              and meaningful execution, you&apos;ll fit right in.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#F9F9F9] pb-20 md:pb-28">
        <div className="container mx-auto px-6">
          <h2 className="font-bold text-[16px] text-[#111827] mb-4">
            Available Job List{jobs.length > 0 ? ` (${jobs.length})` : ""}
          </h2>
          <div className="bg-[#f5f5f5] border border-[#e8e8e8] rounded-2xl px-6 min-h-[320px] flex flex-col justify-center">
            {jobs.length === 0 ? (
              <p className="text-center text-[13.5px] text-[#aaaaaa] italic py-20">
                We are sorry but unfortunately there is no opening for now.
              </p>
            ) : (
              <div>
                {jobs.map((job, i) => (
                  <JobRow key={job.id} job={job} last={i === jobs.length - 1} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#F9F9F9] py-24 lg:py-12">
        <div className="container mx-auto px-6 flex flex-col items-center text-center space-y-8">
          <h2
            className="font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0d0d0d] max-w-[640px]"
            style={{ fontSize: "clamp(1.5rem, 2.2vw, 2.1rem)" }}
          >
            Your Product Deserves More Than Advice,{" "}
            <span className="relative inline-block">
              <span className="relative z-10">
                Let&apos;s fix what&apos;s not working
              </span>
              {/* Wavy underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="10"
                viewBox="0 0 400 10"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0 8 Q100 2 200 6 Q300 10 400 4"
                  stroke="#fdb62f"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#103FD5] hover:bg-[#0c2fa3] active:scale-[0.97] transition-all duration-200 text-white text-[15px] font-bold px-8 py-4 rounded-[40px]"
          >
            Work With Us
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
        </div>
      </section>
      
</div>
    </Wrapper>
  );
};

export default CareerPage;