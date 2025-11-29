"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "sonner"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import api from "@/lib/api/axios"

export const createShortLinkSchema = z.object({
  // slug: z.string().min(3),
  url: z.string().min(3),

});

export default function ShortLinkForm() {
  const form = useForm({
    resolver: zodResolver(createShortLinkSchema),
    defaultValues: {
      url: "",
      // slug: "",

    }
  })
  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: (data: z.infer<typeof createShortLinkSchema>) => {
      return api.post(`/links/new`, data)
    },
    onSuccess: async () => {
      toast.success("Link created successfully")
      queryClient.invalidateQueries({ queryKey: ['links'] });
      form.reset()
    },
  })

  const onSubmit = (data: z.infer<typeof createShortLinkSchema>) => {
    mutate(data)
  }

  const { isDirty, isSubmitting } = form.formState;


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex justify-between gap-4">
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Paste your link here</FormLabel>
                <FormControl>
                  <Input placeholder="https://google.com/" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Custom ShortLink</FormLabel>
                <FormControl>
                  <Input placeholder="/short" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
        </div>
        <Button
          disabled={isPending || !isDirty}
          type="submit"
        >
          {isPending ? "Loading..." : "Create New Link"}
        </Button>
      </form>
    </Form>
  )
}