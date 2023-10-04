import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:[
        {
            id:"1",
            image: require('../media/image1.png'),
            category: 'Europe',
            title: 'Russian warship: Moskva sinks in Black Sea',
            namePage: 'BBC News',
            iconPage:require('../media/icon-page-bbc.png'),
            time: '4 hour',
            content:"Leading exchanges, polled by the Russian press, have indicated they are not afraid of the upcoming strict crypto regulations. A requirement for coin trading platforms to establish a local office is one of the proposals in a regulatory roadmap drafted by the government in Moscow. Cryptocurrency Exchanges to Set Up Shop in Russian Federation Some of the world’s largest digital assets exchanges, interviewed by Kommersant, are not objecting to a potential requirement to establish permanent presence in Russia in order to continue to offer services to its citizens. The idea to oblige foreign-based platforms to do so is part of the government’s roadmap to regulate the country’s crypto space. The document, reportedly signed by Deputy Prime Minister Dmitry Chernyshenko, has been prepared as an alternative approach to Bank of Russia’s call for a ban on trading, among other crypto operations. With its hardline stance, the central bank has found itself in isolation as most other government institutions, including the Finance Ministry, favor regulation over prohibition. Among other requirements envisaged in the roadmap are those related to anti-money laundering efforts such as the sharing of transaction data with Rosfinmonitoring, Russia’s financial watchdog. Crypto market players will also have to put in place mechanisms to verify information about the ownership of the digital assets they are dealing with. Binance, the largest crypto exchange by volume, told the business daily it’s ready to open a branch or even register a legal entity in Russia, “if this contributes to the convenience of users and the security of operations.” Olga Goncharova, head of government relations for Russia and the CIS countries, said that Binance supports the regulatory roadmap as a step that “will make operations more understandable, transparent, and user-friendly” while also noting the proposals need further “calibration.” Another major crypto trading platform, Huobi, stated that it hopes for an “open dialogue with Russian regulators.” Its team believes that a constructive cryptocurrency law would help increase confidence in digital assets and exchanges in both individual and institutional investors. Crypto exchange AAX revealed it has no immediate plans to establish an office in the Russian Federation but it also said it may start working in this direction in case the regulations are approved. AAX is ready to comply with what it described as “legitimate” regulatory requirements. The exchange, which serves around half a million Russian residents, remarked that it keeps information about its clients, their balances, transactions, and trading activities. Russian lawmakers are now working on a new bill to fill the regulatory gaps remaining after the adoption of the law “On Digital Financial Assets.” The authors aim to define which entities will be allowed to work with cryptocurrencies, including crypto exchanges. Trading platforms incorporated abroad will be subject to a “special” registration regime, the Deputy Chair of the Security and Anti-Corruption Committee Andrey Lugovoy, one of the sponsors, told Russian media. Do you think crypto exchanges will be able to adapt to Russia’s upcoming rules for the sector? Share your thoughts on the subject in the comments section below.",
            like:false,
            quantityLike:1,
            quantityComment:1,
            favorite:false    
        },
        {
            id:"2",
            image: require('../media/image-2.png'),
            category: 'Europe',
            title: "Ukraine's President Zelensky to BBC: Blood money being pai",
            namePage: 'BBC News',
            iconPage:require('../media/icon-page-bbc.png'),
            time: '1 hour',
            content:"Leading exchanges, polled by the Russian press, have indicated they are not afraid of the upcoming strict crypto regulations. A requirement for coin trading platforms to establish a local office is one of the proposals in a regulatory roadmap drafted by the government in Moscow. Cryptocurrency Exchanges to Set Up Shop in Russian Federation Some of the world’s largest digital assets exchanges, interviewed by Kommersant, are not objecting to a potential requirement to establish permanent presence in Russia in order to continue to offer services to its citizens. The idea to oblige foreign-based platforms to do so is part of the government’s roadmap to regulate the country’s crypto space. The document, reportedly signed by Deputy Prime Minister Dmitry Chernyshenko, has been prepared as an alternative approach to Bank of Russia’s call for a ban on trading, among other crypto operations. With its hardline stance, the central bank has found itself in isolation as most other government institutions, including the Finance Ministry, favor regulation over prohibition. Among other requirements envisaged in the roadmap are those related to anti-money laundering efforts such as the sharing of transaction data with Rosfinmonitoring, Russia’s financial watchdog. Crypto market players will also have to put in place mechanisms to verify information about the ownership of the digital assets they are dealing with. Binance, the largest crypto exchange by volume, told the business daily it’s ready to open a branch or even register a legal entity in Russia, “if this contributes to the convenience of users and the security of operations.” Olga Goncharova, head of government relations for Russia and the CIS countries, said that Binance supports the regulatory roadmap as a step that “will make operations more understandable, transparent, and user-friendly” while also noting the proposals need further “calibration.” Another major crypto trading platform, Huobi, stated that it hopes for an “open dialogue with Russian regulators.” Its team believes that a constructive cryptocurrency law would help increase confidence in digital assets and exchanges in both individual and institutional investors. Crypto exchange AAX revealed it has no immediate plans to establish an office in the Russian Federation but it also said it may start working in this direction in case the regulations are approved. AAX is ready to comply with what it described as “legitimate” regulatory requirements. The exchange, which serves around half a million Russian residents, remarked that it keeps information about its clients, their balances, transactions, and trading activities. Russian lawmakers are now working on a new bill to fill the regulatory gaps remaining after the adoption of the law “On Digital Financial Assets.” The authors aim to define which entities will be allowed to work with cryptocurrencies, including crypto exchanges. Trading platforms incorporated abroad will be subject to a “special” registration regime, the Deputy Chair of the Security and Anti-Corruption Committee Andrey Lugovoy, one of the sponsors, told Russian media. Do you think crypto exchanges will be able to adapt to Russia’s upcoming rules for the sector? Share your thoughts on the subject in the comments section below.",
            like:false,
            quantityLike:25,
            quantityComment:1.9,
            favorite:false    
        },
        {
            id:"3",
            image: require('../media/image-3.png'),
            category: 'Travel',
            title: 'Her train broke down. Her phone died. And then she met her',
            namePage: 'BBC News',
            iconPage:require('../media/icon-page-bbc.png'),
            time: '4 hour',
            content:"Leading exchanges, polled by the Russian press, have indicated they are not afraid of the upcoming strict crypto regulations. A requirement for coin trading platforms to establish a local office is one of the proposals in a regulatory roadmap drafted by the government in Moscow. Cryptocurrency Exchanges to Set Up Shop in Russian Federation Some of the world’s largest digital assets exchanges, interviewed by Kommersant, are not objecting to a potential requirement to establish permanent presence in Russia in order to continue to offer services to its citizens. The idea to oblige foreign-based platforms to do so is part of the government’s roadmap to regulate the country’s crypto space. The document, reportedly signed by Deputy Prime Minister Dmitry Chernyshenko, has been prepared as an alternative approach to Bank of Russia’s call for a ban on trading, among other crypto operations. With its hardline stance, the central bank has found itself in isolation as most other government institutions, including the Finance Ministry, favor regulation over prohibition. Among other requirements envisaged in the roadmap are those related to anti-money laundering efforts such as the sharing of transaction data with Rosfinmonitoring, Russia’s financial watchdog. Crypto market players will also have to put in place mechanisms to verify information about the ownership of the digital assets they are dealing with. Binance, the largest crypto exchange by volume, told the business daily it’s ready to open a branch or even register a legal entity in Russia, “if this contributes to the convenience of users and the security of operations.” Olga Goncharova, head of government relations for Russia and the CIS countries, said that Binance supports the regulatory roadmap as a step that “will make operations more understandable, transparent, and user-friendly” while also noting the proposals need further “calibration.” Another major crypto trading platform, Huobi, stated that it hopes for an “open dialogue with Russian regulators.” Its team believes that a constructive cryptocurrency law would help increase confidence in digital assets and exchanges in both individual and institutional investors. Crypto exchange AAX revealed it has no immediate plans to establish an office in the Russian Federation but it also said it may start working in this direction in case the regulations are approved. AAX is ready to comply with what it described as “legitimate” regulatory requirements. The exchange, which serves around half a million Russian residents, remarked that it keeps information about its clients, their balances, transactions, and trading activities. Russian lawmakers are now working on a new bill to fill the regulatory gaps remaining after the adoption of the law “On Digital Financial Assets.” The authors aim to define which entities will be allowed to work with cryptocurrencies, including crypto exchanges. Trading platforms incorporated abroad will be subject to a “special” registration regime, the Deputy Chair of the Security and Anti-Corruption Committee Andrey Lugovoy, one of the sponsors, told Russian media. Do you think crypto exchanges will be able to adapt to Russia’s upcoming rules for the sector? Share your thoughts on the subject in the comments section below.",
            like:false,
            quantityLike:28,
            quantityComment:1.5,
            favorite:false    
        },
        {
            id:"4",
            image: require('../media/image-4.png'),
            category: 'Money',
            title: 'Wind power produced more electricity than coal and nucle',
            namePage: 'USA Today',
            iconPage:require('../media/icon-page-usa.png'),
            time: '4 hour',
            content:"Leading exchanges, polled by the Russian press, have indicated they are not afraid of the upcoming strict crypto regulations. A requirement for coin trading platforms to establish a local office is one of the proposals in a regulatory roadmap drafted by the government in Moscow. Cryptocurrency Exchanges to Set Up Shop in Russian Federation Some of the world’s largest digital assets exchanges, interviewed by Kommersant, are not objecting to a potential requirement to establish permanent presence in Russia in order to continue to offer services to its citizens. The idea to oblige foreign-based platforms to do so is part of the government’s roadmap to regulate the country’s crypto space. The document, reportedly signed by Deputy Prime Minister Dmitry Chernyshenko, has been prepared as an alternative approach to Bank of Russia’s call for a ban on trading, among other crypto operations. With its hardline stance, the central bank has found itself in isolation as most other government institutions, including the Finance Ministry, favor regulation over prohibition. Among other requirements envisaged in the roadmap are those related to anti-money laundering efforts such as the sharing of transaction data with Rosfinmonitoring, Russia’s financial watchdog. Crypto market players will also have to put in place mechanisms to verify information about the ownership of the digital assets they are dealing with. Binance, the largest crypto exchange by volume, told the business daily it’s ready to open a branch or even register a legal entity in Russia, “if this contributes to the convenience of users and the security of operations.” Olga Goncharova, head of government relations for Russia and the CIS countries, said that Binance supports the regulatory roadmap as a step that “will make operations more understandable, transparent, and user-friendly” while also noting the proposals need further “calibration.” Another major crypto trading platform, Huobi, stated that it hopes for an “open dialogue with Russian regulators.” Its team believes that a constructive cryptocurrency law would help increase confidence in digital assets and exchanges in both individual and institutional investors. Crypto exchange AAX revealed it has no immediate plans to establish an office in the Russian Federation but it also said it may start working in this direction in case the regulations are approved. AAX is ready to comply with what it described as “legitimate” regulatory requirements. The exchange, which serves around half a million Russian residents, remarked that it keeps information about its clients, their balances, transactions, and trading activities. Russian lawmakers are now working on a new bill to fill the regulatory gaps remaining after the adoption of the law “On Digital Financial Assets.” The authors aim to define which entities will be allowed to work with cryptocurrencies, including crypto exchanges. Trading platforms incorporated abroad will be subject to a “special” registration regime, the Deputy Chair of the Security and Anti-Corruption Committee Andrey Lugovoy, one of the sponsors, told Russian media. Do you think crypto exchanges will be able to adapt to Russia’s upcoming rules for the sector? Share your thoughts on the subject in the comments section below.",
            like:false,
            quantityLike:10,
            quantityComment:2,
            favorite:false    
        },
        {
            id:"5",
            image: require('../media/image-5.png'),
            category: 'Life',
            title: "'We keep rising to new challenges:' For churches hit by",
            namePage: 'USA Today',
            iconPage:require('../media/icon-page-usa.png'),
            time: '4 hour',
            content:"Leading exchanges, polled by the Russian press, have indicated they are not afraid of the upcoming strict crypto regulations. A requirement for coin trading platforms to establish a local office is one of the proposals in a regulatory roadmap drafted by the government in Moscow. Cryptocurrency Exchanges to Set Up Shop in Russian Federation Some of the world’s largest digital assets exchanges, interviewed by Kommersant, are not objecting to a potential requirement to establish permanent presence in Russia in order to continue to offer services to its citizens. The idea to oblige foreign-based platforms to do so is part of the government’s roadmap to regulate the country’s crypto space. The document, reportedly signed by Deputy Prime Minister Dmitry Chernyshenko, has been prepared as an alternative approach to Bank of Russia’s call for a ban on trading, among other crypto operations. With its hardline stance, the central bank has found itself in isolation as most other government institutions, including the Finance Ministry, favor regulation over prohibition. Among other requirements envisaged in the roadmap are those related to anti-money laundering efforts such as the sharing of transaction data with Rosfinmonitoring, Russia’s financial watchdog. Crypto market players will also have to put in place mechanisms to verify information about the ownership of the digital assets they are dealing with. Binance, the largest crypto exchange by volume, told the business daily it’s ready to open a branch or even register a legal entity in Russia, “if this contributes to the convenience of users and the security of operations.” Olga Goncharova, head of government relations for Russia and the CIS countries, said that Binance supports the regulatory roadmap as a step that “will make operations more understandable, transparent, and user-friendly” while also noting the proposals need further “calibration.” Another major crypto trading platform, Huobi, stated that it hopes for an “open dialogue with Russian regulators.” Its team believes that a constructive cryptocurrency law would help increase confidence in digital assets and exchanges in both individual and institutional investors. Crypto exchange AAX revealed it has no immediate plans to establish an office in the Russian Federation but it also said it may start working in this direction in case the regulations are approved. AAX is ready to comply with what it described as “legitimate” regulatory requirements. The exchange, which serves around half a million Russian residents, remarked that it keeps information about its clients, their balances, transactions, and trading activities. Russian lawmakers are now working on a new bill to fill the regulatory gaps remaining after the adoption of the law “On Digital Financial Assets.” The authors aim to define which entities will be allowed to work with cryptocurrencies, including crypto exchanges. Trading platforms incorporated abroad will be subject to a “special” registration regime, the Deputy Chair of the Security and Anti-Corruption Committee Andrey Lugovoy, one of the sponsors, told Russian media. Do you think crypto exchanges will be able to adapt to Russia’s upcoming rules for the sector? Share your thoughts on the subject in the comments section below.",
            like:false,
            quantityLike:11,
            quantityComment:5,
            favorite:false    
        },
    ]
}

export const newsReducer=createSlice({
    name:'news',
    initialState,
    reducers:{
        likeHandle:(state,action)=>{
            const news=state.value.find((news)=>{
                return news.id===action.payload.id
            })
            if(action.payload.type==='like'){
                news.quantityLike=(parseInt(news.quantityLike)+1).toString()
            }else if(action.payload.type==='unlike'){
                news.quantityLike=(parseInt(news.quantityLike)-1).toString()
            }
            state.value.map((item)=>{
                if(item.id===action.payload){
                    return news
                }
                return item;
            })
        },
        addNews:(state,action)=>{
            return state.value=[...action.payload.news,...state.value]
        }
    }
})

export const {likeHandle}=newsReducer.actions

export default newsReducer.reducer