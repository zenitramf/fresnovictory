import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/give')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/give"!</div>
}
