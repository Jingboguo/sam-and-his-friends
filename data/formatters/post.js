const config = include('config');

function miniPostFormatter(miniPost) {
	return {
		id: miniPost.topic_id,
		title: miniPost.title,
		date: miniPost.created_at,
		content: miniPost.excerpt,
	};
}

function miniPostsFormatter(miniPosts) {
	return miniPosts.map(miniPost => miniPostFormatter(miniPost));
}

/**
 * Hard code string is not good, the response only has a user id, so need to send
 * anther request to get the name and authorImageUrl. Since only Sam will post
 * in this category, so use hard code string as a compromise solution.
 */
function singlePostFormatter(post) {
	return {
		name: '小山',
		content: post.cooked,
		date: post.updated_at,
		reads: post.reads,
		authorImageUrl:
			'https://renzhen1024.com/user_avatar/renzhen1024.com/mountainsun1988/240/90_2.png',
	};
}

/**
 * Hard code string is not good, the response only has a user id, so need to send
 * anther request to get the name and authorImageUrl. Since only Sam will post
 * in this category, so use hard code string as a compromise solution.
 */
function postFormatter(post) {
	return {
		id: post.id,
		title: post.title,
		subTitle: post.fancy_title || '这张帖子没有副标题',
		date: new Date(post.created_at),
		name: '小山',
		authorImageUrl:
			'https://renzhen1024.com/user_avatar/renzhen1024.com/mountainsun1988/240/90_2.png',
		content: post.excerpt || '内容被山姆哥藏起来了，点击“继续阅读”',
		category: '山姆哥',
		numLikes: post.like_count,
		numComments: post.posts_count,
		isReaderMode: config.isReaderMode,
	};
}

function postsFormatter(topics) {
	return topics
		.map(topic => postFormatter(topic))
		.sort((a, b) => b.date - a.date);
}

exports.miniPostsFormatter = miniPostsFormatter;
exports.postFormatter = postFormatter;
exports.postsFormatter = postsFormatter;
exports.singlePostFormatter = singlePostFormatter;
