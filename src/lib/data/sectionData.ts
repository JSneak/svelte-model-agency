import type BioInfo from '$lib/components/ModelSection.svelte';
import modelOne from '$lib/assets/model1.png';
import modelTwo from '$lib/assets/model2.jpeg';
import modelThree from '$lib/assets/model3.png';
import modelFour from '$lib/assets/model4.png';

export const sections: BioInfo[] = [
	{
		name: 'Erika Mateo',
		picture: modelOne,
		nameColor: 'text-gray-700',
		gradient: 'gradientModelOne',
		bgColor: 'text-[#fff1ea]',
		number: 1,
		height: 185,
		weight: 57,
		eyeColor: 'Green',
		hairColor: 'Blonde',
		bio: 'Erika Mateo, Swedish model, working in the fashion capitals for 6 years, founder of ModelMe, a blog into sustainable lifestyle.'
	},
	{
		name: 'Stepan Assonov',
		picture: modelTwo,
		nameColor: 'text-gray-700',
		gradient: 'gradientModelTwo',
		bgColor: 'text-[#dbfaff]',
		number: 2,
		height: 185,
		weight: 57,
		eyeColor: 'Green',
		hairColor: 'Blonde',
		bio: 'Stepan Assonov, Swedish model, working in the fashion capitals for 6 years, founder of ModelMe, a blog into sustainable lifestyle.'
	},
	{
		name: 'Katsiaryna Endruszkiewicz',
		picture: modelThree,
		nameColor: 'text-gray-700',
		gradient: 'gradientModelThree',
		bgColor: 'text-[#fe5d5f]',
		number: 3,
		height: 185,
		weight: 57,
		eyeColor: 'Green',
		hairColor: 'Blonde',
		bio: 'Katsiaryna Endruszkiewicz, freelance photographer, publishing her amazing works for free on unsplash.com'
	},
	{
		name: 'Napat Saeng',
		picture: modelFour,
		nameColor: 'text-[#616894]',
		gradient: 'gradientModelFour',
		bgColor: 'text-[#30344A]',
		number: 4,
		height: 185,
		weight: 57,
		eyeColor: 'Green',
		hairColor: 'Blonde',
		bio: 'Napat Saeng, freelance photographer, publishing her amazing works for free on unsplash.com'
	}
];
