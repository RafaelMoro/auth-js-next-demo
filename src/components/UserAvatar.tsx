/* eslint-disable @next/next/no-img-element */

interface UserAvatarProps {
  imgSrc: string;
}
 
export default function UserAvatar({ imgSrc }: UserAvatarProps) {
  return (
    <div>
      <img className="w-10 h-10 rounded-full" src={imgSrc} alt="User Avatar" />
    </div>
  )
}