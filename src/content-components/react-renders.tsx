import { useState, useRef, memo } from 'react';

export const Example1 = () => {
	const [count, setCount] = useState(0);

	const rendersRef = useRef(0);

	rendersRef.current += 1;

	return (
		<section className="mb-8 rounded-md border-2 border-amber-400 px-4 py-2">
			<p>Count: {count}</p>
			<p>Renders: {rendersRef.current}</p>
			<button onClick={() => setCount(count + 1)} className="mb-2 rounded-md bg-blue-600 px-2 py-1">
				Increment
			</button>
		</section>
	);
};

const ChildComponent = () => {
	const rendersRef = useRef(0);

	rendersRef.current += 1;

	return (
		<div class="my-2 w-64 rounded-md border-2 border-white p-2">
			<p class="m-0 p-0">Children Renders: {rendersRef.current}</p>
		</div>
	);
};

export const Example2 = () => {
	const [count, setCount] = useState(0);

	const rendersRef = useRef(0);

	rendersRef.current += 1;

	return (
		<section className="mb-8 rounded-md border-2 border-amber-400 px-4 py-2">
			<p>Count: {count}</p>
			<p>Parent Renders: {rendersRef.current}</p>

			<button onClick={() => setCount(count + 1)} className="mb-2 rounded-md bg-blue-600 px-2 py-1">
				Increment
			</button>

			<ChildComponent />
		</section>
	);
};

const ChildComponentMemoized = memo(ChildComponent);

export const Example3 = () => {
	const [count, setCount] = useState(0);

	const rendersRef = useRef(0);

	rendersRef.current += 1;

	return (
		<section className="mb-8 rounded-md border-2 border-amber-400 px-4 py-2">
			<p>Count: {count}</p>
			<p>Parent Renders: {rendersRef.current}</p>

			<button onClick={() => setCount(count + 1)} className="mb-2 rounded-md bg-blue-600 px-2 py-1">
				Increment
			</button>

			<ChildComponentMemoized />
		</section>
	);
};

const Count = () => {
	const [count, setCount] = useState(0);

	const rendersRef = useRef(0);

	rendersRef.current += 1;

	return (
		<>
			<p>Count: {count}</p>
			<p>Count Renders: {rendersRef.current}</p>
			<button onClick={() => setCount(count + 1)} className="mb-2 rounded-md bg-blue-600 px-2 py-1">
				Increment
			</button>
		</>
	);
};

export const Example4 = () => {
	return (
		<section className="mb-8 rounded-md border-2 border-amber-400 px-4 py-2">
			<Count />
			<ChildComponent />
		</section>
	);
};
