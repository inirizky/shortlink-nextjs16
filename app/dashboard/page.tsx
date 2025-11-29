'use client'
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
// import { SiteHeader } from "@/components/site-header"

import data from "./data.json"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Calendar, Copy, ExternalLink, Plus } from "lucide-react"
import ShortLinkForm from "@/components/shortlink-form"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { requireAuth } from "@/lib/session"
import { useQuery } from "@tanstack/react-query"
import { SiteHeader } from "@/components/site-header"
import api from "@/lib/api/axios"
import Link from "next/link"

export default function Page() {

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_FE_URL}/${text}`)
  }


  const { isPending, error, data } = useQuery({
    queryKey: ['links'],
    queryFn: async () => (await api.get('/links')).data.data,
    refetchOnWindowFocus: false, // ga refetch tiap window focus
    staleTime: 1000 * 60 * 5, // 5 menit, data dianggap fresh
  });

  console.log(data);



  return (
    <>
      <SiteHeader title="Dashboard" />
      <main className="@container/main flex flex-1 flex-col gap-2 pt-6">

        <div className="flex flex-col gap-4 md:gap-6 px-4 lg:px-3">
          <SectionCards />


          <Card className="">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>Create New Short Link</span>
              </CardTitle>
              <CardDescription>Enter a long URL to create a shortened version with analytics tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <ShortLinkForm />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5" />
                <span>Your Links</span>
              </CardTitle>
              <CardDescription>Manage and track the performance of your shortened links</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>

                      <TableHead>Original URL</TableHead>
                      <TableHead>Short Link</TableHead>
                      <TableHead>Created</TableHead>
                      {/* <TableHead>Recent Activity</TableHead> */}

                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data?.map((link: any) => (
                      <TableRow key={link.id}>

                        <TableCell>
                          <div className="max-w-xs truncate" title={link.url}>
                            {link.url}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Link href={`/${link.slug}`}>
                              <Badge className="bg-secondary px-2 py-1 rounded-md text-sm">{link.slug}</Badge>
                            </Link>
                            <Button variant="ghost" size="sm" onClick={() => copyToClipboard(link.slug)}>
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="flex items-center space-x-1 text-sm text-gray-300">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(link.createdAt).toLocaleDateString()}</span>
                          </div>
                        </TableCell>
                        {/*  */}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              {/* {links?.length === 0 && (
						<div className="text-center py-8 text-gray-500">
							<Link2 className="h-12 w-12 mx-auto mb-4 text-gray-300" />
							<p>No links created yet. Create your first short link above!</p>
						</div>
					)} */}
            </CardContent>
          </Card >
        </div >
        {/* <ChartAreaInteractive />

      <DataTable data={data} /> */}
      </main >

    </>

  )
}
