export type Coffee = {
	id: number;
	name: string;
	image: string;
	price: string;
	rating: number;
	votes: number;
	popular: boolean;
	available: boolean;
};
export async function getCoffeeList() {
	const res = await fetch(
		"https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
	);
	if (!res.ok) {
		throw new Error("Failed to fetch coffee list");
	}
	return res.json();
}
