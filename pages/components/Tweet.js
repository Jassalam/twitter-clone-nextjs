import timeago from "@/lib/timeago";

export default function Tweet({ tweet }) {
    return (
       <div className="card border rounded px-2 py-4">
        <p className="text-right">
          {timeago.format(new Date(tweet.createdAt))}{'   '}</p>
          <p>{tweet.content}</p><br></br>
          <p className="text-slate-500 hover:text-blue-600"># {tweet.author.name}{'   '}</p>
         
          </div>
          )
  }