"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ServiceModal } from "@/components/ServiceModal";
import type { Service } from "@/lib/services";

export function ServiceDetailClient({
  service,
  categoryTitle,
  backHref,
}: {
  service: Service;
  categoryTitle: string;
  backHref: string;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) router.push(backHref);
  }, [open, router, backHref]);

  if (!open) return null;

  return (
    <ServiceModal
      service={service}
      categoryTitle={categoryTitle}
      onClose={() => setOpen(false)}
    />
  );
}
