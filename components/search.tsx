"use client";

import { useDocsSearch } from "fumadocs-core/search/client";
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogHeader,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  type SharedProps,
} from "fumadocs-ui/components/dialog/search";
import { useI18n } from "fumadocs-ui/contexts/i18n";
import { SearchIcon } from "lucide-react";
import { Kbd } from "@/components/ui/kbd";

const searchDialogItems = [
  {
    label: "Components",
    href: "/docs/components",
  },
];

export default function DefaultSearchDialog(props: SharedProps) {
  const { locale } = useI18n(); // (optional) for i18n
  const { search, setSearch, query } = useDocsSearch({
    type: "fetch",
    locale,
  });

  return (
    <SearchDialog
      isLoading={query.isLoading}
      onSearchChange={setSearch}
      search={search}
      {...props}
    >
      <SearchDialogOverlay />
      <SearchDialogContent className="fixed top-20 left-1/2 -translate-x-1/2 bg-background md:top-[15%]">
        <SearchDialogHeader>
          <SearchIcon />
          <SearchDialogInput />
          <SearchDialogClose>
            <Kbd>ESC</Kbd>
          </SearchDialogClose>
        </SearchDialogHeader>
        <SearchDialogList items={query.data !== "empty" ? query.data : null} />

        {search ? null : (
          <div className="flex flex-col">
            {searchDialogItems.map((item) => (
              <a
                className="px-6 py-3 text-muted-foreground text-sm hover:bg-muted-foreground/30"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </SearchDialogContent>
    </SearchDialog>
  );
}
