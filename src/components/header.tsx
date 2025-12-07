import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import VBCLogo from "../vbc_logo.svg?react";

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const navItems = [
		{ title: "Heaven", href: "/heaven" },
		{ title: "About Us", href: "/about-us" },
		{ title: "Sermons", href: "/sermons" },
		{ title: "Give", href: "/give" },
	] as const;

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto flex h-20 items-center justify-between px-4">
				{/* Logo */}
				<Link className="flex items-center gap-2" to="/">
					<VBCLogo className="h-14 w-auto" />
					<span className="sr-only">Fresno Victory</span>
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden items-center gap-8 md:flex">
					{navItems.map((item) => (
						<Link
							activeProps={{
								className: "text-primary font-semibold",
							}}
							className="font-medium text-sm transition-colors hover:text-primary"
							key={item.title}
							to={item.href}
						>
							{item.title}
						</Link>
					))}
				</nav>

				{/* Desktop CTA */}
				<div className="hidden md:flex">
					<Button asChild size="lg">
						<a href="/visit">Visit Us</a>
					</Button>
				</div>

				{/* Mobile Menu Toggle */}
				<Button
					className="md:hidden"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					size="icon"
					type="button"
					variant="ghost"
				>
					{isMobileMenuOpen ? (
						<X className="h-6 w-6" />
					) : (
						<Menu className="h-6 w-6" />
					)}
					<span className="sr-only">Toggle menu</span>
				</Button>
			</div>

			{/* Mobile Nav */}
			{isMobileMenuOpen ? (
				<div className="border-b bg-background md:hidden">
					<div className="flex flex-col space-y-4 p-4">
						{navItems.map((item) => (
							<Link
								activeProps={{
									className: "text-primary font-semibold",
								}}
								className="font-medium text-sm transition-colors hover:text-primary"
								key={item.title}
								onClick={() => setIsMobileMenuOpen(false)}
								to={item.href}
							>
								{item.title}
							</Link>
						))}
						<div className="pt-4">
							<Button asChild className="w-full" size="lg">
								<a href="/visit">Visit Us</a>
							</Button>
						</div>
					</div>
				</div>
			) : null}
		</header>
	);
}
