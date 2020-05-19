
import {IDog} from './dogModel'

export const EXAMPLE: IDog[] = [
	{
		'breed': 'Shiba inu',
		'name': 'Anu',
		'id': '1'
	},
	{
		'breed': 'Bulldog',
		'name': 'Balloon',
		'id': '2'
	},
	{
		'breed': 'Pug',
		'name': 'Peko',
		'id': '3'
	}
]

export const fetchAllDog = () => new Promise(res => {
	res(EXAMPLE)
})

export const fetchDogById = (id: string) => new Promise((res, rej) => {

	const dog = EXAMPLE.find(f => f.id === id)

	if (dog)
		res(dog)
	else
		rej()
})
