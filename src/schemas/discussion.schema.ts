import { TypeOf, object, string } from 'zod';

export const CreateDiscussionSchema = object({
	params: object({
		ownerId: string({
			required_error: 'Owner ID is required',
		}).uuid({
			message: 'An id must be a valid uuid',
		}),
	}),
	body: object({
		title: string({
			required_error: 'Title is required',
		})
			.min(1, 'Title must be at least 1 character long')
			.max(100, 'Title must be at most 100 characters long'),
		type: string({
			required_error: 'Type is required',
		}).refine(val => ['public', 'private'].includes(val), {
			message: 'Type must be either public or private',
		}),
	}),
});

export type CreateDiscussionInput = TypeOf<typeof CreateDiscussionSchema>['body'];
export type CreateDiscussionParams = TypeOf<typeof CreateDiscussionSchema>['params'];

export const AddUserToDiscussionSchema = object({
	params: object({
		discussionId: string({
			required_error: 'Discussion ID is required',
		}).uuid({
			message: 'An id must be a valid uuid',
		}),
		senderId: string({
			required_error: 'User ID is required',
		}).uuid({
			message: 'An id must be a valid uuid',
		}),
		userId: string({
			required_error: 'User ID is required',
		}).uuid({
			message: 'An id must be a valid uuid',
		}),
	}),
});

export type AddUserToDiscussionParams = TypeOf<typeof AddUserToDiscussionSchema>['params'];

export const ListDiscussionSchema = object({
	params: object({
		ownerId: string({
			required_error: 'Owner ID is required',
		}).uuid({ message: 'An id must be a valid uuid' }),
	}),
});

export type ListDiscussionParams = TypeOf<typeof ListDiscussionSchema>['params'];

export const ListDiscussionMembersSchema = object({
	params: object({
		discussionId: string({
			required_error: 'Discussion ID is required',
		}).uuid({
			message: 'An id must be a valid uuid',
		}),
	}),
});

export type ListDiscussionMembersParams = TypeOf<typeof ListDiscussionMembersSchema>['params'];

export const FindDiscussionSchema = object({
	params: object({
		ownerId: string({
			required_error: 'Owner ID is required',
		}).uuid({ message: 'An id must be a valid uuid' }),

		discussionId: string({
			required_error: 'Discussion ID is required',
		}).uuid({
			message: 'An id must be a valid uuid',
		}),
	}),
});

export type FindDiscussionParams = TypeOf<typeof FindDiscussionSchema>['params'];

export const FindDiscussionByTitleSchema = object({
	params: object({
		title: string({
			required_error: 'Title is required',
		}).min(3, 'Title must be at least 3 character long'),
		type: string({
			required_error: 'Type is required',
		}).refine(val => ['public', 'private'].includes(val), {
			message: 'Type must be either public or private',
		}),
	}),
});

export type FindDiscussionByTitleParams = TypeOf<typeof FindDiscussionByTitleSchema>['params'];
