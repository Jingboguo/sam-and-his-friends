exports.API = 'https://renzhen1024.com/';

exports.about =
	'Few words about Jingbo. Wechat：GuojingboRutgers，Email：guojingbochina@gmail.com';

const description = 'One sentence about Jingbo';
exports.description = description;
exports.creator = {
	description,
	firstName: 'JingBo',
	lastName: 'Guo',
	profileImage: 'images/vivian-site-profile-image.jpeg',
};

exports.metaDescription = description;

exports.lengthOfActiveUsersAtIndexPage = 5;

const siteTitle = 'Jingbo Guo';
exports.siteTitle = siteTitle;

exports.socialMedias = [
	{
		name: 'LinkedIn',
		className: 'linkedin',
		url: 'https://www.linkedin.com/in/jingbo-guo-44829795/',
	},
	{
		name: 'Facebook',
		className: 'facebook',
		url: 'https://www.facebook.com/guojingbo',
	},
	{
		name: 'Email',
		className: 'envelope',
		url: 'mailto:guojingbochina@gmail.com',
	},
];

exports.username = 'vivian';

exports.rootCategory = 'Vivian';

exports.subCategories = [
	{
		name: 'Industrial Engineering',
		description: 'About Industrial Engineering',
	},
	{ name: 'Data Science', description: 'About Data Science' },
];

exports.categories = {
	12: [
		{
			name: 'Vivian',
			color: '#FFE66D',
			link: `/`,
		},
	],
	13: [
		{
			name: 'Data Science',
			color: '#4ECDC4',
			link: '/?subcategory=$data-science',
		},
	],
	14: [
		{
			name: 'Industrial Engineering',
			color: '#1A535C',
			link: '/?subcategory=14-category',
		},
	],
};

const defalutMetaTagImageSrcStr =
	'https://samandhisfriends.com/images/post-og-image.jpg';

const fbCommonMetaTags = [
	{
		type: 'og:locale',
		content: 'en-us',
	},
	{
		type: 'fb:app_id',
		content: '381747502434242',
	},
];

exports.fbMetaTagsForIndexRoute = [
	{ type: 'og:url', content: 'https://guojingbo.com' },
	{
		type: 'og:type',
		content: 'website',
	},
	{ type: 'og:title', content: siteTitle },
	{
		type: 'og:description',
		content: description,
	},
	{
		type: 'og:image',
		content: defalutMetaTagImageSrcStr,
	},
	...fbCommonMetaTags,
];

const twitterCommonMetaTags = [
	{
		type: 'twitter:card',
		content: 'summary_large_image',
	},
	{
		type: 'twitter:site',
		content: '@renzhen1024',
	},
	{
		type: 'twitter:creator',
		content: '@renzhen1024',
	},
];

exports.twitterMetaTagsForIndexRoute = [
	{
		type: 'twitter:title',
		content: siteTitle,
	},
	{
		type: 'twitter:description',
		content: description,
	},
	{
		type: 'twitter:image',
		content: defalutMetaTagImageSrcStr,
	},
	...twitterCommonMetaTags,
];

exports.defalutMetaTagImageSrcStr = defalutMetaTagImageSrcStr;
exports.fbCommonMetaTags = fbCommonMetaTags;
exports.twitterCommonMetaTags = twitterCommonMetaTags;

exports.setting = {
	/**
	 * The UI strings will be translated to the prefered language for user, user
	 * also need to provide translated string in `/src/locale/<local>.js` with
	 * same file name. If not set, it will be default to user's browser setting,
	 * in this case, user need to provide all possible translation string files.
	 */
	locale: 'en-us',
	/**
	 * When display full name, should family name comes first, some of the lange
	 * has family name comes first like Chinese while other language has givename
	 * first, e.g. English
	 */
	familyNameFirst: true,
};
