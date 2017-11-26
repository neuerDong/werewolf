export const roles = {
    placeholder: {
        name: 'placeholder',
        description: [],
    },

    guard: {
        name: 'guard',
        description: [
            '好人中的一员。',
            '每天晚上可以守护任意一名存活角色，包括自己。',
            '被守护的玩家不会被狼人杀害。',
        ],
    },

    villager: {
        name: 'villager',
        description: [
            '好人中的一员',
            '无任何特殊技能，白天根据他人的发言判断身份；',
            '投票处决可能为狼的玩家。',
        ],
    },

    werewolf: {
        name: 'werewolf',
        description: [
            '与村名作对的邪恶势力，每天晚上可以杀掉一名玩家。',
        ],
    },

    witch: {
        name: 'witch',
        description: [
            '好人中的一员。',
            '有一瓶解药，可在当晚救活一名被狼人杀的玩家；',
            '女巫在使用出解药后的回合，不再获得狼人的杀人信息。',
        ],
    },
};
