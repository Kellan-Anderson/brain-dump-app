import { promises as fs } from "fs";
import Markdown from "react-markdown"
import { Checkbox } from "~/components/ui/checkbox";
import { SignInButton } from "./_components/signInButton";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";

export default async function Home() {
  const readme = await fs.readFile(process.cwd() + '/README.md')
  
  return (
    <div className="w-full">
      <div className="prose flex flex-row justify-center max-w-full px-4 py-12">
        <main className="w-full md:w-2/3 lg:w-3/5">
          <Markdown
            className="text-foreground"
            components={{
              h1: (props) => (
                <div className="flex flex-col gap-1.5">
                  <h1 className="text-foreground">{props.children}</h1>
                  <div className="flex flex-row gap-2">
                    <SignInButton provider="Google" />
                    <SignInButton provider="Github" />
                    <Button asChild>
                      <Link href="https://github.com/Kellan-Anderson/brain-dump-app" className="no-underline">
                        <LinkIcon className="pr-1"/> Check out the code
                      </Link>
                    </Button>
                  </div>
                </div>
              ),
              h2: (props) => <h2 className="text-foreground">{props.children}</h2>,
              li: (props) => {
                const { children } = props;
                const elementText = children?.toString();
                if(elementText?.startsWith('[ ]')) {
                  return (
                    <li className="flex flex-row items-start justify-start gap-1 -ml-7">
                      <Checkbox checked={false} className="rounded mt-2 mr-2"/>
                      {elementText.slice(4)}
                    </li>
                  );
                }
                
                if(elementText?.startsWith('[x]')) {
                  return (
                    <li className="flex flex-row items-start justify-start gap-1 -ml-7">
                      <Checkbox checked className="rounded mt-2 mr-2"/>
                      {elementText.slice(4)}
                    </li>
                  );
                }
                
                return <li>{children}</li>
              },
              ul: (props) => <ul className="list-disc">{props.children}</ul>
            }}
          >{readme.toString()}</Markdown>
        </main>
      </div>
    </div>
  );
}