import React, { useState } from 'react';

const Navbar = () => {
	// Setting Hamburger
	const [open, setOpen] = useState(false);

	return (
		<div className="w-full h-16 md:h-20 flex items-center justify-between">
			{/* Logo */}
			<div className="flex items-center gap-4 text-2xl font-bold">
				<img className="w-8 h-8" src="/logo.png" alt="App Logo" />
				<span>bilblog.</span>
			</div>

			{/* Mobile Menu */}
			<div className="md:hidden">
				{/* Button */}
				<div
					className="cursor-pointer text-2xl"
					onClick={() => setOpen((prev) => !prev)}
				>
					{open ? 'x' : '☰'}
				</div>

				{/* Menus */}
				<div
					className={`w-full h-screen flex flex-col items-center justify-center gap-5 font-medium text-lg absolute top-16 transition-all ease-in-out ${
						open ? '-right-0' : '-right-[100%]'
					}`}
				>
					<a href="">Home</a>
					<a href="">Trending</a>
					<a href="">Category</a>
					<a href="">About</a>
					<a href="">
						<button className="py-2 px-6 rounded-3xl bg-sky-500 text-white">
							Login
						</button>
					</a>
				</div>
			</div>

			{/* Desktop Menu */}
			<div className="hidden md:flex items-center gap-5 xl:gap-10 font-medium">
				<a href="">Home</a>
				<a href="">Trending</a>
				<a href="">Category</a>
				<a href="">About</a>
				<a href="">
					<button className="py-2 px-6 rounded-3xl bg-sky-500 text-white">
						Login
					</button>
				</a>
			</div>
		</div>
	);
};

export default Navbar;
