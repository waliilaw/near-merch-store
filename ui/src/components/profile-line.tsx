type ProfileLineProps = {
  nearAccountId: string;
  nearProfile: {
    name?: string;
    image?: { ipfs_cid?: string };
  } | null;
};

export function ProfileLine({ nearAccountId, nearProfile }: ProfileLineProps) {
  return (
    <div className="border border-[rgba(0,0,0,0.1)] p-6 mb-4 bg-card">
      <div className="flex items-start gap-4">
        {nearProfile?.image?.ipfs_cid ? (
          <img
            src={`https://ipfs.near.social/ipfs/${nearProfile.image.ipfs_cid}`}
            alt={nearProfile.name || nearAccountId}
            className="size-16 rounded-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <div className="size-16 rounded-full bg-[#00ec97] flex items-center justify-center">
            <svg className="size-8" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="black" />
            </svg>
          </div>
        )}
        <div className="flex-1">
          {nearProfile?.name ? (
            <>
              <h3 className="text-xl font-medium mb-1">{nearProfile.name}</h3>
              <p className="text-sm text-[#717182]">{nearAccountId}</p>
            </>
          ) : (
            <p className="text-sm text-[#717182]">{nearAccountId}</p>
          )}
        </div>
      </div>
    </div>
  );
}
