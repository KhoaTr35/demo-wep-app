"use client"

import { useState } from "react"
import { Button } from "./button"
import { Card, CardContent, CardHeader, CardTitle } from "./card"

export function Counter() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-center">Counter</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <p className="text-4xl font-bold text-primary">{count}</p>
        <Button onClick={incrementCount} size="lg" className="w-full">
          Increase Count
        </Button>
      </CardContent>
    </Card>
  )
}
