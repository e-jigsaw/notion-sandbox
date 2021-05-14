import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.TOKEN,
})

const res = await notion.users.list()
console.log(res)
