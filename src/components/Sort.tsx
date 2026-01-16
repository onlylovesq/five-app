// 因为是能够点击切换的，因此要有事件，所以是客户端组件
"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { SortValue } from "@/types/global";
import { SortTitle, SortList } from "@/lib/constants";

export default function Sort() {
  const handleValueChange = (value: SortValue) => {
    console.log(value);
  };

  return (
    <div className="w-64 py-5">
      <p className="m-5 text-xl">{SortTitle}</p>
      <ToggleGroup
        className="flex-col gap-3"
        type="single"
        defaultValue={SortList[0].value}
        onValueChange={handleValueChange}
      >
        {SortList.map((item) => (
          <ToggleGroupItem key={item.value} value={item.value}>
            {item.text}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
