const { Client, APIErrorCode } = require("@notionhq/client")

const notion= new Client({auth:process.env.NOTION_SECRET})

const databaseId=process.env.NOTION_DATABASE_ID

async function tryConnection(){
try {
  const myPage = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Landmark",
      text: {
        contains: "Bridge",
      },
    },
  })
} catch (error) {
  if (error.code === APIErrorCode.ObjectNotFound) {
    //
    // For example: handle by asking the user to select a different database
    //
  } else {
    // Other error handling code
    console.error(error)
  }
}
}
tryConnection()