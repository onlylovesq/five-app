import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Title, NavList } from "@/lib/constants";

export default async function Footer() {
  return (
    <div className="border-t mt-6">
      <div className="container py-32 flex justify-between">
        <h2 className="text-2xl">
          <Link href="/">{Title}</Link>
        </h2>
        <div className="grid grid-cols-3 gap-10">
          {NavList.map((item, i) => (
            <div key={item.title} className="flex">
              {i !== 0 && <Separator orientation="vertical" />}
              <div>
                <span className="m-4 space-y-3">{item.title}</span>
                <ul className="m-4 space-y-3">
                  {item.list.map((obj) => (
                    <li key={obj}>{obj}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
