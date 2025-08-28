import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-center text-3xl">Welcome to Home Page</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6">
            <p className="text-lg text-muted-foreground text-center">
              This is your new Home page! You can add any content you want here.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Feature 1</h3>
                  <p className="text-sm text-muted-foreground">
                    Add your first feature description here.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Feature 2</h3>
                  <p className="text-sm text-muted-foreground">
                    Add your second feature description here.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4 w-full sm:w-auto">
              <Button asChild size="lg">
                <Link href="/">Go to Counter Page</Link>
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
