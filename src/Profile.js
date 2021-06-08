import React from 'react';

const profileData = {
    velopert: {
        name: '김민규',
        description:'Frontend Engineer @ RIDI',
    },
    hommer:{
        name : '호머 심슨',
        description: '심슨 가족에 나오는 아빠 역활 캐릭터',
    }
}

function Profile({match} ) {
    const { username} = match.params;
    const profile = profileData[username];

    if (!profile){
        return <div>존재하지 않는 사용자 입니다.</div>;
    }
    return (
        <div>
            <h3>{username} ({profile.nae})</h3>
            <p>{profile.description}</p>
        </div>
    );
}

export default Profile;