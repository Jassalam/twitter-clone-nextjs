import timeago from "@/lib/timeago";
import Image from "next/image";
import Link from "next/link";

export default function Tweet({ tweet, nolink }) {
  if(!tweet) return
  
    return (
       <div className="card border rounded px-2 py-4">
        <p>
          {tweet.author.image && (
         <Image 
         className='rounded-full'
         src={tweet.author.image}
         alt={tweet.author.name}
         width='40'
         height='40'/>
         )}
         <Link href={`/${tweet.author.name}`}>
                  <span className='text-base font-medium leading-6 color-primary hover:underline'>
                    {tweet.author.name}
                  </span>
                </Link></p>

          <p>
          <span className='pl-1 text-sm font-light leading-5 color-dimmed'>
                  {nolink ? (
                    <span>{timeago.format(new Date(tweet.createdAt))}</span>
                  ) : (
                    <Link
                      href={`/${tweet.author.name}/status/${tweet.id}`}
                      className='hover:underline'>
                      {timeago.format(new Date(tweet.createdAt))}
                    </Link>
                  )}
                </span>
            </p>
          <p>
            {tweet.content}</p>
            <br></br>
          
         
          </div>
          )
  }