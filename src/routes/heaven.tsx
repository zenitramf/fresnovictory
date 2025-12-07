import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/heaven')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/heaven"!</div>
}
