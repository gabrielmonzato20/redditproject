import { VoteType } from "./VoteType";

export interface VotePayLoad{
  voteType: VoteType,
  postId: number
}
