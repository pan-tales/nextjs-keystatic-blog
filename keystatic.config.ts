// keystatic.config.ts
import { collection, config, fields, singleton } from '@keystatic/core';

export default config({
	storage: {
		kind: 'local',
	},

	singletons: {
		homepage: singleton({
			label: 'HomeTitle',
			path: 'src/content/homepage',
			schema: {
				headline: fields.text({ label: 'HomeText' }),
			},
		}),
	},

	collections: {
		articles: collection({
			slugField: "path",
			label: 'Articles',
			path: 'src/content/collections/articles/*/',
			schema: {
				path: fields.slug({ name: { label: 'path' } }),
				title: fields.text({ label: 'Title' }),
				cover: fields.image({
					label: 'Cover Image',
					directory: 'public/images/avatars',
					publicPath: '/images/avatars/'
				}),
				date: fields.date({ label: 'Date' }),
				text: fields.document({
					label: 'Text',
					formatting: true,
					links: true,
					dividers: true,
					tables: true,
					images: true,
				}),
			}
		}),
	}
});