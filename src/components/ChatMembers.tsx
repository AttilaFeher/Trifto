import { ChatSummaryViewType } from '../types/collection';

type ChatMembersType = {
  nickNames: ChatSummaryViewType['nicknames'];
};

function ChatMembers({ nickNames }: ChatMembersType) {
  return (
    <div className="absolute left-0 right-0 top-0 z-10 mr-4 bg-white shadow-md">
      <div className="py-3 pl-8 leading-tight text-gray-800">
        <div className="flex items-center gap-2">
          <img
            src="../../public/default.jpg"
            className="h-[54px] w-[54px] rounded-full"
          ></img>
          <ul className="font-medium">
            {nickNames?.map((nickname, i: number) => (
              <li className="inline-block" key={nickname + i}>
                {i !== 0 && ', '}
                {nickname}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ChatMembers;
