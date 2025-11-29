import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
// import { SiteHeader } from "@/components/site-header"

import data from "./data.json"

export default function Page() {
  return (
    <>
      {/* <SiteHeader title="Dashboard" /> */}

      <SectionCards />

      <ChartAreaInteractive />

      <DataTable data={data} />

    </>

  )
}
