const quotes = [
	{
		id: 1,
		text: `Remember that in life you should conduct yourself as at a banquet.

Suppose that something is passed around and comes to you. Stretch out your hand and take only what propriety allows.

Suppose that it passes you by. Do not detain it.

Suppose that it has not yet come to you. Do not send your desire ahead of it, but wait until it comes to you.

Act in this way toward children, a wife, public offices, wealth, and you will one day be worthy to feast with the gods.

But if you do not take any of the things set before you, and even despise them, then you will not only be a guest at the table of the gods, but will share in their power. For by acting thus, Diogenes and Heraclitus, and others like them, rightly became divine and were called so.`,
		author: 'Epictetus',
		themes: ['desire', 'indifference'],
		practices: []
	},

	{
		id: 2,
		text: `He is master of all whose power extends over the desires and aversions of others, over the ability to grant them and take them away. Therefore, whoever wishes to be free, let him neither desire nor avoid anything that depends on others; otherwise, he is a slave.`,
		author: 'Epictetus',
		themes: ['desire'],
		practices: []
	},

	{
		id: 3,
		text: `If you want your children, wife, and friends to live forever, you are foolish; for you wish that what is not in your power were in your power, and that what belongs to others were yours. So if you wish your slave to be free from vice, you are a fool; for you wish that evil should not be evil, but something else. But if you desire never to fail in your desires, you can achieve this. Practice, then, what lies within your power.`,
		author: 'Epictetus',
		themes: ['death', 'vice', 'desire'],
		practices: []
	},

	{
		id: 4,
		text: `If you wish to improve, be content to be thought foolish and ignorant with regard to external things. Wish to seem to know nothing; and if it appears to you that some think you important, distrust yourself. For you must know that it is not easy to keep your will in a state conformable to nature and at the same time attend to external things; but when a person concerns himself with one, he must neglect the other.`,
		author: 'Epictetus',
		themes: ['others_opinions', 'will', 'things', 'indifference'],
		practices: []
	},

	{
		id: 5,
		text: `If you intend to improve, discard thoughts such as: if I neglect my affairs, I shall have no means of living; if I do not punish my slave, he will become bad. For it is better to die of hunger, free from sorrow and fear, than to live in abundance with anxiety; and it is better that your slave be bad than that you be miserable.

Begin with small things. Has oil been spilled? Has a little wine been stolen? Say at once: for such a price is freedom from disturbance sold; for such a price is tranquility bought—but nothing is given for nothing.

And when you call your slave, reflect that he may not hear you; and if he does hear, he may not do what you wish. But the point is not how things stand with him, but that things should be well with you, so that it may not be in his power to disturb you.`,
		author: 'Epictetus',
		themes: ['tranquility', 'fear', 'control', 'freedom', 'hardship'],
		practices: []
	},

	{
		id: 6,
		text: `Never say of anything, “I have lost it,” but say, “I have returned it.” Has your child died? It has been returned. Has your wife died? She has been returned. Has your property been taken from you? Has it not also been returned?

“But the one who took it is a bad man.”

What concern is it of yours by whose hands the giver demanded it back? While he allows you its use, take care of it as something not your own, as travelers treat an inn.`,
		author: 'Epictetus',
		themes: ['loss'],
		practices: []
	},

	{
		id: 7,
		text: `At every event that happens to you, turn to yourself and ask what faculty you have for turning it to use. If you see a beautiful man or woman, you will find that the faculty to resist is self-control. If you encounter hardship (pain), you will find endurance. If it is insulting words, you will find patience. And if you have formed the habit rightly, external things will not carry you away.`,
		author: 'Epictetus',
		themes: ['patience', 'hardship', 'insults'],
		practices: ['reframing']
	},

	{
		id: 8,
		text: `Illness is an obstacle to the body, but not to the mind, unless the mind itself chooses otherwise. Lameness is an obstacle to the leg, but not to the mind. Say this to yourself in every case; for you will find that it is an obstacle to something else, but not to you.`,
		author: 'Epictetus',
		themes: ['illness', 'obstacles', 'mind'],
		practices: []
	},

	{
		id: 9,
		text: `Do not seek for events to happen as you wish, but wish for them to happen as they do happen, and your life will go smoothly.`,
		author: 'Epictetus',
		themes: ['tranquility', 'acceptance', 'desire'],
		practices: []
	},

	{
		id: 10,
		text: `Remember what I so often repeat to you: all this knowledge is merely exercise for our wit, and nothing more. I keep returning to one question: how will this help me? Will it make me braver, more just, more self-controlled? I am not yet ready for exercises; I need a physician.

Why, then, do you teach me what is useless to know? You promised much, but what I see is trivial. You said I would not tremble even if swords flashed around me, if the blade touched my throat; you said I would remain calm even if fires blazed around me, if a sudden storm seized my ship and tossed it across the sea.

Teach me, then, to despise pleasure, to despise fame; afterward you may teach me to untangle subtle arguments, to analyze ambiguous statements, to pierce the darkness with insight—but for now, teach me what is necessary.`,
		author: 'Seneca',
		themes: ['knowledge', 'resilience', 'fear', 'practice', 'tranquility'],
		practices: []
	},
	{
		id: 11,
		text: `As on a voyage, when the ship has reached port, if you go ashore to fetch water, you may along the way, for amusement, pick up a shell or a bulb; but your thoughts must be fixed on the ship, and you must keep watching whether the captain calls, and then you must throw away all these things, lest you be tied up and thrown on board like a sheep.

So in life, nothing prevents it if, instead of a little bulb and a shell, a wife and a child are given to you. But if the captain calls, run to the ship and leave all these things behind, without turning back. And if you are old, do not even go far from the ship, so that when you are called, you are not caught at a disadvantage.`,
		author: 'Epictetus',
		themes: ['family', 'old_age'],
		practices: []
	},

	{
		id: 12,
		text: `Do not pride yourself on an advantage that belongs to another. If a horse, priding itself, were to say, “I am beautiful,” that would be tolerable. But when you pride yourself and say, “I have a beautiful horse,” know that you are priding yourself on the possession of a good horse.

What, then, is your own? The use of impressions. Therefore, when in the use of impressions you are in accordance with nature, then be proud, for then you will be proud of a good that is truly your own.`,
		author: 'Epictetus',
		themes: ['pride', 'good'],
		practices: []
	},

	{
		id: 13,
		text: `People are disturbed not by the things that happen to them, but by the judgments they form about them; for example, death is nothing dreadful, since if it were, it would have appeared so to Socrates. What is dreadful, then, is the judgment that death is dreadful.

When we encounter obstacles, or are troubled or distressed, let us never blame others, but ourselves—that is, our judgments. To blame others for one’s troubles is the act of an uneducated person; to blame oneself is the beginning of education; and when one’s education is complete, one will blame neither others nor oneself.`,
		author: 'Epictetus',
		themes: ['hardship', 'anxiety', 'judgment', 'death'],
		practices: []
	},

	{
		id: 14,
		text: `When you are about to undertake some action, remind yourself of the nature of that action. If you are going to bathe, picture to yourself what happens in the bathhouse: people splashing water, jostling, abusing one another, stealing. Thus you will proceed more safely if you say to yourself, “I am now going to bathe and to keep my will in accordance with nature.”

And you should do the same in every action; for if something hinders you from bathing, you will be ready with the thought: “I wanted not only to bathe, but also to keep my will in accordance with nature; and I shall not keep it so if I become angry at what happens.”`,
		author: 'Epictetus',
		themes: ['tranquility', 'nature'],
		practices: []
	},

	{
		id: 15,
		text: `It is not true that exiles lack the necessities of life. Indeed, people who are lazy, unresourceful, and incapable of living like men are usually in want and destitute even when they are in their own country. But energetic, industrious, and intelligent people, wherever they go, live well and without want. We do not lack many things if we do not wish to live in luxury:

For what more do mortals need than these two things—
the bread of Demeter and the drink of the Water-Bearer—
which are at hand and provided to nourish us?`,
		author: 'Gaius Musonius Rufus',
		themes: ['exile', 'body', 'food', 'things', 'moderation'],
		practices: []
	},

	{
		id: 16,
		text: `There have been cases in which exile became an absolute blessing, as it did for Diogenes, who through exile was transformed from an ordinary citizen into a philosopher; and instead of idling away his time in Sinope, he occupied himself in Greece, and in the pursuit of virtue surpassed philosophers.

For others, whose health had been ruined by excessive indulgence and luxurious living, exile became a source of strength, because they were forced to live a more vigorous life.

It is said that others, accustomed to luxury, were cured of gout—though previously they had been completely confined to their beds by the disease—people whom exile compelled to grow accustomed to a simpler way of life, and by this very means restored them to health.

Thus it seems that exile, by treating people better than they treat themselves, helps rather than harms the health of both body and soul.`,
		author: 'Gaius Musonius Rufus',
		themes: ['exile', 'health', 'wealth', 'illness', 'excess', 'body'],
		practices: []
	},

	{
		id: 17,
		text: `They say that a person sees more clearly in the affairs of others than in his own; this happens to those whom self-love blinds, and whose fear takes away the ability to discern their own advantage. But when they are safe and free from fear, such people become clear-minded.

Yet there are matters in which even the wise look more closely when they concern others. And then the wise bestow upon the wise so pleasant and noble a gift as harmony of aims; and in a single yoke the finest work can be accomplished.`,
		author: 'Seneca',
		themes: ['wisdom', 'help', 'friendship'],
		practices: []
	},

	{
		id: 18,
		text: `Virtue teaches us not to waste the present, to think in advance about the future, to take counsel with others, and not to let the soul grow slack; and it is easier for us not to let it slacken, but to let it expand to its full breadth, when we have someone beside us. Therefore, we need a friend—either one who is already perfect, or one who is striving and close to perfection.`,
		author: 'Seneca',
		themes: ['future', 'present', 'help', 'friendship'],
		practices: []
	},

	{
		id: 19,
		text: `In everything that delights the soul, satisfies a need, or is loved, remember to add to its description its nature, beginning with the smallest things. If you love a clay pot, say that you love a clay pot; for when it is broken, you will not be disturbed. If you kiss your child or your wife, say that it is a human being you are kissing; for when your wife or child dies, you will not be disturbed.`,
		author: 'Epictetus',
		themes: ['nature', 'death', 'love'],
		practices: []
	},

	{
		id: 20,
		text: `Remove aversion from all things that do not depend on our will, and transfer it to things contrary to nature that are within our power. For the time being, completely abolish desire; for if you desire anything that is not within our power, you are bound to be unhappy.

And among the things that are within our power and would be good to desire, you have nothing yet. Use only that impulse toward or away from an object which you hold under your own control—and even that, lightly, with reservations and allowances.`,
		author: 'Epictetus',
		themes: ['control', 'nature', 'action', 'happiness', 'unhappiness', 'impulse'],
		practices: []
	},

	{
		id: 21,
		text: `Remember that in desire there is an assumption (a hope) of obtaining what you desire; and in aversion there is an assumption (a hope) that you will not encounter what you seek to avoid. The person who fails to obtain what he desires is unhappy; and the person who falls into what he wishes to avoid is unhappy.

If you try to avoid only those things contrary to nature that are within your power, you will encounter none of the things you wish to avoid. But if you try to avoid illness, death, or poverty, you will be unhappy.`,
		author: 'Epictetus',
		themes: ['control', 'nature', 'desire', 'unhappiness', 'death', 'poverty', 'illness'],
		practices: []
	},

	{
		id: 22,
		text: `How could exile hinder the cultivation of what is truly ours and the acquisition of virtue, when knowledge and the practice of what is right have never been hindered by exile?

Indeed, exile may even assist in this, since it grants people leisure and greater opportunities to study the good and to practice it than before, because they are no longer compelled to perform political duties that only seem to bind them to their homeland, nor are they irritated by relatives or by those who merely appear to be friends, cleverly entangling them and distracting them from the pursuit of what is better.`,
		author: 'Gaius Musonius Rufus',
		themes: ['exile', 'place', 'virtue', 'self_improvement'],
		practices: []
	},

	{
		id: 23,
		text: `Tell me, is not the universe the common homeland of all human beings, as Socrates maintained? Therefore, you should not truly consider yourself exiled from your homeland when you leave the place where you were born and raised, but only exiled from a particular city—if you claim to be a rational person.

Such a person neither values nor despises any place as a cause of happiness or unhappiness, but refers everything to himself and considers himself a citizen of the divine city, which is composed of gods and human beings.

As all the heavens are open to the flight of the eagle,
So the whole earth is a homeland to the noble person.

Thus, a person who lives in his own country but in a different house from the one in which he was born would be considered foolish and ridiculous if he wept and lamented because of it. In the same way, one who thinks it a misfortune to live in a city other than the one where he happened to be born is rightly regarded as ignorant and foolish.`,
		author: 'Gaius Musonius Rufus',
		themes: ['exile', 'place', 'happiness'],
		practices: []
	},

	{
		id: 24,
		text: `The question is raised whether the wise person will examine his own actions and call others into consultation. He cannot do without this as soon as matters touch civic, domestic—so to speak, mortal—affairs.

Here, another’s counsel is as necessary to him as a physician, a pilot, an advocate, or a mediator in a lawsuit. Thus, a wise person will at times benefit another wise person even by persuading him.

And he will also be useful in great and divine matters, by striving together with a friend for integrity, as we have said, and by uniting with him in soul and purpose.`,
		author: 'Seneca',
		themes: ['wisdom', 'help', 'counsel', 'friendship'],
		practices: []
	},

	{
		id: 25,
		text: `The wise can be of benefit to one another. To find another wise person is in itself desirable for the wise; for by nature good cherishes good, and a good person binds himself in spirit to another such person as to himself.`,
		author: 'Seneca',
		themes: ['wisdom', 'other_people', 'help'],
		practices: []
	},

	{
		id: 26,
		text: `Practice saying to every troubling impression: “You are merely an impression, and not at all what you appear to be.”

Then examine it by the rules you possess. First of all, test whether it concerns things that are within our power or things that are not. And if it concerns something that is not within our power, be ready to say: “This is nothing to me.”`,
		author: 'Epictetus',
		themes: ['control', 'beliefs'],
		practices: []
	},

	{
		id: 27,
		text: `When listening to the complaints of a person distressed by living in exile, Musonius comforted him in roughly the following way.

Why, he asked, should anyone who is not devoid of understanding be oppressed by exile? It does not deprive us of water, earth, air, or the sun and other heavenly bodies, nor even of human society, since everywhere and at all times there is the possibility of associating with people.

And if we are forbidden to remain in a certain part of the earth or to associate with certain people, what is so terrible in that? For even when we were at home, we did not enjoy the whole earth, nor did we associate with all people; and even now, while in exile, we can associate with our friends—that is, those who are truly friends and worthy of the name.

But if some turn out to be false and not true friends, it is better for us to be separated from them than to be with them.`,
		author: 'Gaius Musonius Rufus',
		themes: ['exile', 'friendship', 'place'],
		practices: []
	},

	{
		id: 28,
		text: `If you strive for such great things as freedom and happiness, remember that you must not attempt to seize them with slight effort, but must abandon some things altogether and postpone others for a time.

But if you wish to attain these goals and at the same time possess power and wealth, it is possible that you will fail to obtain the latter because of your pursuit of the former. In any case, you will not attain that through which alone freedom and happiness are achieved.`,
		author: 'Epictetus',
		themes: ['freedom', 'happiness', 'power', 'wealth'],
		practices: []
	},

	{
		id: 29,
		text: `A physician who treats only a few patients is no less a physician than one who treats many, provided that he has skill and experience in healing.

Likewise, a musician who teaches only a few students is no less a musician than one who teaches many, provided that he knows the art of music.

Likewise, a horseman who trains only one or two horses is just as much a horseman as one who trains many, if he is skilled in the art of riding.

And in the same way, the title of king belongs to one who has only one or two subjects just as much as to one who has many, provided that he possesses the skill and ability to rule so as to deserve the name of king.

For this reason, it seems to me that Socrates also called philosophy a political and royal discipline, because whoever has mastered it immediately becomes a statesman.`,
		author: 'Gaius Musonius Rufus',
		themes: ['power', 'philosophy'],
		practices: []
	},

	{
		id: 30,
		text: `Some things are within our power, and others are not. Within our power are opinion, impulse, desire, aversion—in a word, whatever is our own doing.

Not within our power are the body, property, reputation, offices, and, in general, whatever is not our own doing.

Things within our power are by nature free, unrestrained, and unhindered; but things not within our power are weak, slavish, subject to restraint, and dependent on others.

Remember, then, that if you regard things that are by nature slavish as free, and things that are in the power of others as your own, you will encounter obstacles, suffer distress, be troubled, and blame both gods and human beings.

But if you regard only what is your own as your own, and what belongs to another as it truly is—another’s—no one will ever compel you, no one will hinder you, you will blame no one, accuse no one, do nothing against your will, suffer no harm, have no enemies, for you will suffer no injury.`,
		author: 'Epictetus',
		themes: ['control', 'anxiety', 'harm'],
		practices: []
	},
	{
		id: 31,
		text: `Can someone be a good king if he is not a good man? No, this is impossible. But suppose we have before us a good man—does he not deserve to be called a philosopher? Certainly, for philosophy is the pursuit of the highest good. Thus, a good king necessarily and inevitably turns out to be a philosopher as well.

Now let us see that the philosopher is royal in nature. A clear attribute of a king’s character is the ability to govern peoples and cities well and to be worthy of ruling over human beings. Who, then, could be more capable of leading a city or more worthy of ruling people than a philosopher? For if he is truly a philosopher, he is required to be intelligent, disciplined, noble, a good judge of what is just and fitting, effective in carrying out his plans, and patient in difficulties. Moreover, he must be courageous, fearless, unshaken in the face of misfortune, and at the same time kind, ready to help, and humane.

Can anyone be found more suitable or more capable of ruling than such a person? No. Even if he has only a few subjects who obey him, he is no less royal for that; for it is enough to govern one’s friends, or one’s wife and children, or finally, oneself.`,
		author: 'Gaius Musonius Rufus',
		themes: ['philosophy', 'power'],
		practices: []
	},

	{
		id: 32,
		text: `It is said that even those help us who generously give us intermediate things—money, favors, security, and the like—things that are valued or necessary in everyday life. In this way, even a fool is said to help a wise person.

But to help means to act upon the soul in accordance with nature through virtue—both one’s own and that of the person acted upon. This cannot fail to be beneficial to the one who helps; for by causing another to practice virtue, he practices his own as well.`,
		author: 'Seneca',
		themes: ['help', 'virtue'],
		practices: []
	},

	{
		id: 33,
		text: `The spirit of a wise person cannot remain as it is unless there are like-minded friends nearby, with whom he can share virtues.

Add to this that all virtues are allied with one another. Therefore, there is benefit in loving virtues in others that are equal to your own, and in having someone love yours. Likeness itself is delightful, especially when what is alike is noble and when those who resemble one another know both how to approve and how to win approval.`,
		author: 'Seneca',
		themes: ['wisdom', 'help', 'virtue', 'friendship', 'approval'],
		practices: []
	},

	{
		id: 34,
		text: `In general, it is of the utmost importance for a good king to be flawless and complete in word and deed, if indeed he wishes to be a “living law,” as the ancients seemed to regard him—one who ensures good governance and harmony, suppresses lawlessness and discord, a true imitator of Zeus, and, like him, a father to his people.

But how could anyone be such a king unless he possessed an excellent nature, had received the best possible education, and possessed all the virtues appropriate to a human being? If, then, there exists any other knowledge that directs human nature toward virtue and teaches a person to practice it and to associate with good people, it should be placed alongside philosophy and compared with it, to see which is better and more capable of producing a good king—whether that knowledge or philosophy.

If, however, no other art is concerned with teaching and transmitting virtue—although some concern themselves exclusively with the human body and what is useful to it, while others that deal with the mind pursue everything except making it well-governed—then philosophy alone makes this its aim and concerns itself with how a person may avoid evil and acquire virtue.

If this is true, what could be more useful for a king who wishes to be good than the study of philosophy? How else, or how better, could a person become a good ruler or live a virtuous life without studying philosophy? For my part, I am convinced that a good king necessarily and inevitably is a philosopher, and that a philosopher is a royal person.`,
		author: 'Gaius Musonius Rufus',
		themes: ['philosophy', 'power', 'virtue', 'education'],
		practices: []
	},

	{
		id: 35,
		text: `A wise person will help a wise person—and not only by his own strength, but also by the strength of the one who receives the help. He can do his work even when left to himself; yet even a runner benefits from an encouraging spectator. The wise person helps not another wise person, but himself—know this. Take away his own strength, and he is good for nothing.

In the same way, one might say that there is no sweetness in honey: it is the tongue and palate of the taster that must be attuned to the flavor so that it pleases rather than offends. For there are those to whom honey seems bitter because of a diseased defect. Both must be of the right kind, so that one may give benefit and the other receive it.`,
		author: 'Seneca',
		themes: ['wisdom', 'help'],
		practices: []
	},

	{
		id: 36,
		text: `A bad person harms another bad person, making him worse by stirring up anger and fear, indulging despondency, and praising pleasures; and bad people fare worst where the vices of many have come together and their depravity has merged into one. Therefore, by the opposite reasoning, a good person benefits a good person.

“How?” you may ask. He gives him joy, strengthens his confidence; at the sight of another’s calmness, each becomes more cheerful. Moreover, one will pass on to the other knowledge of certain things; for the wise person does not know everything, and even if he did, another may discover shorter paths and show by which of them the whole task can be brought to completion.`,
		author: 'Seneca',
		themes: [
			'wisdom',
			'vice',
			'anger',
			'fear',
			'pleasure',
			'joy',
			'confidence',
			'calm',
			'help',
			'influence',
			'knowledge'
		],
		practices: []
	},

	{
		id: 37,
		text: `How will the wise help the wise? He will encourage him, point out an opportunity for noble action, and also share his thoughts with him, teaching what he himself has discovered. For even for the wise there will always be something to discover, and room for the mind’s excursions.`,
		author: 'Seneca',
		themes: ['wisdom', 'help', 'example', 'nobility'],
		practices: []
	},

	{
		id: 38,
		text: `Experienced wrestlers train with one another; a musician is instructed by another equal in skill. The wise person too needs his virtues not to lie idle; and just as he does not allow himself to grow lazy, so another wise person does not allow him to do so either.`,
		author: 'Seneca',
		themes: ['wisdom', 'help', 'virtue', 'laziness', 'idleness'],
		practices: []
	},

	{
		id: 39,
		text: `You wish to know whether the wise can help the wise. For we say that the wise person is filled with every good and has reached the summit; the question then arises how one can benefit someone who possesses the highest good. Good people are useful to one another: they practice the virtues together and maintain wisdom as it is. Each person needs someone with whom to converse and with whom to pursue inquiry.`,
		author: 'Seneca',
		themes: ['wisdom', 'help', 'virtue', 'good'],
		practices: []
	},

	{
		id: 40,
		text: `Everything that is said, everything with which one boasts before an enraptured crowd, is borrowed; it has all been said by Plato, said by Zeno, said by Chrysippus, by Posidonius, and by a great host of others like them. And how the people of today may prove that what they say truly belongs to them, I will tell you: let them act as they speak.`,
		author: 'Seneca',
		themes: ['philosophy', 'practice', 'borrowing'],
		practices: []
	},
	{
		id: 41,
		text: `No one, I think, has done a worse service to all mortals than those who have learned philosophy as if it were some mercenary trade and live differently from how they teach others to live. Subject to all the vices they condemn, they themselves provide the clearest example of useless learning.

From such a teacher I gain no more benefit than from a helmsman who is overcome by seasickness in a storm. When the waves are raging, one must hold the rudder, struggle against the sea itself, wrest the sails from the wind—what help can a ship’s master give me if he is reeling and vomiting? Do you think our life is shaken by storms less violently than any boat? One must not talk, but steer.`,
		author: 'Seneca',
		themes: ['philosophy', 'vices', 'tranquility', 'hardships', 'practice'],
		practices: []
	},

	{
		id: 42,
		text: `We should listen to and read philosophers for the sake of attaining a blessed goal, and we should seek not archaic or invented words, nor awkward metaphors and figures of speech, but useful precepts and noble, courageous sayings that can be put into practice at once. Let us learn them in such a way that what was recently a word becomes a deed.`,
		author: 'Seneca',
		themes: ['philosophy', 'learning', 'self-improvement', 'practice'],
		practices: []
	},

	{
		id: 43,
		text: `“The best days of wretched mortals flee first of all.” [Virgil]

Why the best? Because the rest are unknown to us. Why the best? Because in youth we are able to learn, able to guide an unformed soul toward what is better while it is still pliable; because this is the most suitable time for effort, suitable for invigorating the spirit with study and hardening the body with work. The remaining years are lazier, more relaxed, and closer to the end.

Let us therefore set aside everything that distracts us and strive with our whole soul for one thing: that the swift flight of time does not become clear to us only when it has already passed. Let us count each day as the best and take possession of it. What is fleeing must be seized.`,
		author: 'Seneca',
		themes: ['life', 'youth', 'learning', 'effort', 'work', 'transience', 'future', 'soul'],
		practices: []
	},

	{
		id: 44,
		text: `Just as from a jug the purest wine is poured out first, while what is heavier and more turbid settles at the bottom, so too in our lifetime the best comes first. And we allow it to be drawn off for others, leaving the dregs for ourselves.`,
		author: 'Seneca',
		themes: ['life', 'other people', 'length of life'],
		practices: []
	},

	{
		id: 45,
		text: `“The best days of wretched mortals
flee first of all; then come diseases,
dreary old age, griefs, and finally
the cruelty of pitiless death carries them away.”

Anyone who directs his gaze toward philosophy will reduce this to its proper meaning and say: Virgil never says that days “pass,” but always that they “flee,” and this is the swiftest kind of running. The very best pass by first—so why do we not urge ourselves on to match the speed of what is most fleeting of all? The best flies past; the worse follows.`,
		author: 'Seneca',
		themes: ['life', 'death', 'length of life', 'old age', 'illness', 'time', 'philosophy'],
		practices: []
	},

	{
		id: 46,
		text: `Beginners in philosophy are strong in their first impulse toward everything good, if someone encourages and spurs them on. But later, one thing is lost through the fault of teachers, who teach us how to argue rather than how to live; another through the fault of students, who come to their teachers intending to perfect not the soul, but the intellect. Thus what was philosophy becomes philology.`,
		author: 'Seneca',
		themes: ['mind', 'soul', 'philosophy', 'learning'],
		practices: []
	},

	{
		id: 47,
		text: `[Among other excesses abandoned earlier in youth], I have returned to some of them, but even in this—what I have ceased to abstain from—I preserve moderation, which is closer to abstinence and perhaps more difficult than abstinence itself; for it is easier to renounce something entirely than to maintain restraint.`,
		author: 'Seneca',
		themes: ['moderation', 'excess', 'pleasure'],
		practices: []
	},

	{
		id: 48,
		text: `Much has been said about contempt for money; long speeches have been delivered to instruct people that wealth lies not in inherited possessions but in the soul, and that whoever has little yet considers himself well-off is rich. But sayings like these strike the soul far more powerfully:

He who desires less, needs less.
He has everything who desires only what is enough.

Hearing this or something similar, we cannot help but acknowledge the truth. And yet those who always desire more than is necessary shout with delight and curse money. Whenever you notice such a mood in them, press them, push them, crowd them—casting aside all reasoning, subtleties, and other amusements of useless cleverness. Speak against greed, speak against luxury, and when it seems that some benefit has been achieved, that the souls of the listeners have been touched, press even harder.

It is hard to believe how useful speech can be when it aims at healing and is directed wholly toward the good of the listeners. Weak minds are easily inspired with a love of what is right and honorable; even over those not yet deeply corrupted and still pliable, truth establishes ownership if it finds a skillful advocate.`,
		author: 'Seneca',
		themes: ['philosophy', 'self-improvement', 'benefit', 'soul'],
		practices: []
	},

	{
		id: 49,
		text: `It is not difficult to awaken in a listener a thirst for living rightly: nature has placed in everyone the foundations of good and the seeds of virtue; we are all born for this, and when a prompter appears, the good—sleeping, as it were, in our soul—awakens. Have you not seen how the theater resounds with a shout as soon as something is said with which we all agree and by our unanimous response testify that it is true?`,
		author: 'Seneca',
		themes: ['virtue', 'good', 'philosophy', 'self-improvement', 'soul'],
		practices: []
	},

	{
		id: 50,
		text: `Many come to philosophers to listen, not to learn—just as we go to the theater for the pleasure that delights the ear, whether by speech, voice, or performance. You will see a considerable portion of the audience for whom the philosopher’s lectures are merely a refuge for leisure. They do not think of freeing themselves from vices there, or of adopting some rule of life by which to test their character; they seek only the pleasure of listening. Some even come with writing tablets, not to retain ideas but words, and later repeat them without benefit to their listeners, just as they themselves listened without benefit.

Others are stirred by noble sayings and, quick both in expression and in spirit, are filled with the same feelings as the speaker… These are spurred on and carried away by the beauty of the subject, not by the sound of empty words. If death is spoken of courageously, or fate with defiance, they immediately wish to do everything they have heard. They yield, they become what they are urged to be—if only their soul could preserve this state, if only the crowd, skilled at dissuading from everything honorable, did not immediately rob them of their noble impulse. Few are capable of carrying home the intentions with which they were filled.`,
		author: 'Seneca',
		themes: ['philosophy', 'self-improvement', 'benefit', 'soul'],
		practices: []
	},

	{
		id: 51,
		text: `Whoever comes to a philosopher should take something good away with him every day and return home either healthier or closer to recovery. And in fact this is what happens: such is the power of philosophy that it benefits not only those devoted to it, but also everyone who comes into contact with it.

If you go out into the sun, you will get a tan even if that was not your intention; if you sit in a perfumer’s shop and linger a little longer, you will carry away the scent. Being near philosophy, people inevitably take away something useful, even without making an effort. Notice that I said “even without making an effort,” not “even while resisting.”`,
		author: 'Seneca',
		themes: ['self-improvement', 'philosophy', 'benefit'],
		practices: []
	},

	{
		id: 52,
		text: `I will write how you should deal with the thirst for learning that overwhelms you, so that it does not itself become an obstacle. One must not snatch here and there, must not rush at everything; the whole is mastered in parts. One must choose a load according to one’s strength and concern oneself only with what one can manage. One should draw not as much as one wants, but as much as one can hold. Let only your soul be sound—and you will hold as much as you wish. The more the soul receives into itself, the broader it becomes.`,
		author: 'Seneca',
		themes: ['self-improvement', 'learning', 'knowledge', 'soul'],
		practices: []
	},

	{
		id: 53,
		text: `May fate find us ready and free from idleness! Such is the great spirit that entrusts itself to God. Conversely, petty and lacking in nobility is the one who resists, who thinks badly of the order of the world and would rather correct the gods than himself.`,
		author: 'Seneca',
		themes: ['fortune', 'tranquility', 'acceptance', 'nobility', 'idleness'],
		practices: []
	},

	{
		id: 54,
		text: `It is best to endure what you cannot correct and, without complaint, to accompany God by whose will everything happens. A bad soldier is one who follows his general with groaning. Therefore let us promptly and without laziness accept orders and steadfastly continue the noblest task, into which everything we endure is woven.`,
		author: 'Seneca',
		themes: ['hardships', 'complaints', 'endurance'],
		practices: []
	},

	{
		id: 55,
		text: `Nature brings order to the realm you see through change. After bad weather comes fair; after calm seas, waves rise; winds blow in turn; night is replaced by day; one part of the sky rises, another sinks; eternity consists of opposites.

To this law our spirit must adapt, follow it, obey it; whatever happens, let it believe that it could not have been otherwise and dare not reproach nature.`,
		author: 'Seneca',
		themes: ['nature', 'change', 'soul', 'tranquility', 'complaints', 'acceptance'],
		practices: []
	},

	{
		id: 56,
		text: `Winter brings cold—we must freeze; summer restores warmth—we must suffer from heat; unstable weather threatens health—we must fall ill. Somewhere we will encounter a beast, elsewhere a human being more dangerous than any beast. One thing water will take away, another fire. We are powerless to change such an order of things—but we do have the power to attain greatness of spirit worthy of a good person and to endure all turns of chance steadfastly, without quarreling with nature.`,
		author: 'Seneca',
		themes: ['hardships', 'nature', 'illness', 'loss', 'tranquility'],
		practices: []
	},

	{
		id: 57,
		text: `The hardships and misfortunes you speak of have happened to many. Countless arrows, of many kinds, are aimed at us: some have already struck, others are well aimed and will certainly hit, others, though they strike someone else, will graze us too. Let us not be astonished at what we are doomed to from birth, at what no one has grounds to complain about, since it is the same for all. Yes, the same—for even one who has escaped misfortune might not have escaped it; equality of rights does not lie in everyone using them, but in their being granted to all. Let us command the soul to be calm and, without complaint, pay the tax owed by mortals.`,
		author: 'Seneca',
		themes: ['hardships', 'misfortune', 'complaints', 'equality'],
		practices: ['premeditatio malorum']
	},

	{
		id: 58,
		text: `With these—illnesses, hardships, death—you must live under one roof. You cannot flee from them; you can despise them. And you will despise them if you often anticipate the future in thought. Anyone approaches more boldly what he has long accustomed himself to, and will be steadfast in adversity if he has thought about it in advance. The unprepared, on the contrary, is frightened even by trifles.

Therefore we must ensure that nothing is unexpected for us; and since everything seems heavier because of novelty, through constant reflection you will be a novice in no misfortune.`,
		author: 'Seneca',
		themes: ['hardships', 'misfortune', 'death', 'future', 'fear'],
		practices: ['premeditatio malorum']
	},

	{
		id: 59,
		text: `You have set out on a long journey—life—and so you will stumble somewhere, be shoved, fall, grow weary, and cry out, “I wish I were dead!”—and thus lie. Here you will part from a companion, there you will bury him, elsewhere you will be frightened. Through such troubles you must measure this rough road.`,
		author: 'Seneca',
		themes: ['hardships', 'death', 'life'],
		practices: []
	},

	{
		id: 60,
		text: `There is nothing unusual, nothing unexpected in hardships and troubles. To be angry about all these things is just as ridiculous as complaining that you were splashed in the street or got dirty in the mud. In life everything is like in a bathhouse, in a crowd, on the road: one thing is thrown at you deliberately, another strikes you by chance. Life is a rough affair.`,
		author: 'Seneca',
		themes: ['hardships', 'complaints', 'anger'],
		practices: []
	},

	{
		id: 61,
		text: `We waste time on unnecessary subtleties that make us not better, but only more learned. Wisdom is both clearer and simpler; for sound judgment it is enough to read a little. Yet we overload philosophy, as we do everything else, with superfluities. In reading, as in all things, we suffer from lack of moderation: we learn for school, not for life.`,
		author: 'Seneca',
		themes: ['philosophy', 'learning', 'books', 'wisdom', 'simplicity', 'excess'],
		practices: []
	},

	{
		id: 62,
		text: `I do not reply to your letters as quickly as you might expect, not because I am so burdened with affairs. You may disregard such excuses, for both I and everyone else are free—if only we choose to be. Tasks do not pursue us; people cling to them themselves and regard busyness as a sign of happiness.`,
		author: 'Seneca',
		themes: ['happiness', 'freedom', 'time', 'busyness'],
		practices: []
	},

	{
		id: 63,
		text: `When the conscience is unclean, one may escape punishment, but one cannot be confident. Even the unexposed criminal thinks he is about to be caught; he tosses in his sleep, and as soon as any crime is mentioned, he recalls his own. It seems to him poorly hidden, badly concealed. A criminal may hide successfully, but he cannot rely on his luck.`,
		author: 'Seneca',
		themes: ['punishment', 'fear', 'conscience', 'evil'],
		practices: []
	},

	{
		id: 64,
		text: `A great safeguard of security is not to act unjustly. Those who have no mastery over themselves live a life full of turmoil and anxiety, from which they are never free. The more harm they do, the more they fear; having committed wrongdoing, they tremble and can do nothing else, held fast by conscience, which forces them to answer to it. He who expects punishment is already punished, and he who deserves it inevitably expects it.`,
		author: 'Seneca',
		themes: ['punishment', 'security', 'fear', 'conscience', 'evil'],
		practices: []
	},

	{
		id: 65,
		text: `Everyone has someone to whom he entrusts as much as is entrusted to himself. Even if that person restrains his talkativeness and is content with a single listener, they will amount to a whole city, and what was recently a secret will become common gossip.`,
		author: 'Seneca',
		themes: ['other people', 'secrets'],
		practices: []
	},

	{
		id: 66,
		text: `Most useful for a safe life is not to bustle about and to speak less with others, more with oneself. Conversation has a certain sweetness, insinuating and seductive, and, like love or intoxication, it compels the disclosure of secrets. Whoever hears will not remain silent; whoever does not remain silent will say more than he heard—and will not keep silent about the speaker either.`,
		author: 'Seneca',
		themes: ['other people', 'secrets'],
		practices: []
	},

	{
		id: 67,
		text: `I will tell you what you must watch over in order to live more safely. And I think you will listen to my advice as if I were teaching you how to preserve your health in the marshes of the Ardeatine plain. Examine what drives one person to destroy another, and you will see hope, envy, hatred, fear, and contempt.

Of all these, contempt is the easiest to bear: many have even hidden in it for self-protection. The one who is despised is certainly trampled upon, but only in passing. No one harms a despised person zealously and persistently. Even in battle, the fallen are passed by; they fight those who are still standing.

You will give no fuel to hopeful envy if you possess nothing that can inflame another’s dishonorable greed—nothing remarkable. For it is precisely what is remarkable and rare that people desire, even if it is small. You will avoid envy if you keep out of sight, do not boast of your advantages, and learn to rejoice inwardly.

Hatred arises either from injury—which you will not provoke if you harm no one—or it arises without cause, but sound judgment will protect you from it. Hatred has proved dangerous for many: some have incurred it even though they had no enemies.

You will not be feared if your good fortune is moderate and your character gentle. Let people know that it is not dangerous to offend you and that reconciliation with you is certain and easy. But if you are feared—at home and outside it, by slaves and free alike—that is bad for you yourself, for anyone is capable of causing harm. Add this too: the one who is feared also fears; the one who inspires terror in others knows no security.

There remains contempt; its measure lies in your power, if you have chosen it for yourself and it is a matter of will, not necessity. To rid yourself of this inconvenience, liberal studies may help, or friendship with people who possess power and influence among the powerful. Still, one must approach such people without becoming too close, lest the remedy cost more than the disease.`,
		author: 'Seneca',
		themes: ['security', 'fear', 'envy', 'enemies', 'contempt', 'hatred', 'power', 'tranquility'],
		practices: []
	},

	{
		id: 68,
		text: `We can gather enough courage to withstand hardships and misfortunes, if only we are willing to free our necks from the yoke. First of all, pleasures must be rejected: they weaken, soften, and demand much—and therefore require us to demand much from fortune. Next, riches must be despised: they are the pledge of slavery. So let us retreat from gold, from silver, and from all that weighs down happy households. Freedom is not obtained for nothing; and if you value it highly, everything else must be valued at nothing.`,
		author: 'Seneca',
		themes: ['courage', 'freedom', 'hardships', 'fortune', 'wealth', 'pleasure'],
		practices: []
	},

	{
		id: 69,
		text: `You see that people can endure hardships: through the deserts of Africa Cato led his army on foot.

You see that thirst too can be endured: drawing after him the remnants of a defeated army across dried-up hills, without any baggage, he bore the lack of water, and when water appeared, he drank last.

You see that honor and dishonor can be despised: on the very day of his defeat he played ball in the public square.

You see that the power of superiors need not be feared: he challenged both Caesar and Pompey at once, while others, if they dared to provoke one, did so only to please the other.

You see that death and exile can be despised: he assigned exile and death to himself—and before that, war.`,
		author: 'Seneca',
		themes: ['death', 'hardships', 'power', 'contempt', 'glory', 'shame'],
		practices: ['role model']
	},

	{
		id: 70,
		text: `Do you want another example to follow? Take that Cato who lived recently, whom fortune pursued with even greater hostility and persistence than Socrates. In everything she placed obstacles before him; even at the very end she would not allow him to die, yet he proved that a courageous man can both live and die against the will of fortune. His entire life passed either during civil wars or in times already pregnant with civil war. And of him, no less than of Socrates, one may say that he lived under the yoke of slavery—unless you count Gnaeus Pompey, Caesar, and Crassus as champions of freedom.

No one ever saw Cato change amid all the changes of the state: he showed himself the same in all circumstances—in the praetorship and in electoral defeat, under accusation and in the province, in the popular assembly, in the army, and in death. Finally, when the whole state trembled, when on one side stood Caesar supported by ten legions and an equally large force of foreign auxiliaries, and on the other Pompey, who alone equaled all those forces, when some inclined toward Caesar and others toward Pompey—Cato alone constituted the party of the republic.

If you wish to grasp in your mind the picture of that time, on one side you will see the plebs and the mob ready for upheaval; on the other, the optimates, the equestrian order, and everything respectable and select in the city; and in the middle there remained only two—Cato and the Republic.`,
		author: 'Seneca',
		themes: ['travel', 'vices', 'desires', 'escape'],
		practices: ['role model']
	},
	{
		id: 71,
		text: `If you need an example, take Socrates—an old man of extraordinary endurance, who passed through every hardship yet was overcome neither by poverty, made even heavier by the burdens of household life, nor by the toils he endured both in war and at home. Recall, if you will, his wife with her fierce temper and sharp tongue, and his children dull of learning, more like their mother than their father.

And almost his entire life was spent now in war, now under tyranny, now under a freedom harsher than war and the rule of tyrants. For twenty-seven years battles raged; when the fighting ended, the state was handed over to the malice of the Thirty Tyrants, most of whom were his enemies.

Finally came the verdict on the gravest charges: he was accused of impiety and of corrupting the youth, whom he was said to incite against the gods, their parents, and the state; and after that—prison and poison.

Yet none of this altered his soul in the least, so much so that his very expression never changed. This is an astonishing and rare quality! Socrates preserved it to his final hour: no one ever saw him either more cheerful or more sorrowful—he remained constantly even amid the constant assaults of fortune.`,
		author: 'Seneca',
		themes: ['hardships', 'poverty', 'endurance', 'example', 'war', 'state', 'fortune'],
		practices: ['role model']
	},

	{
		id: 72,
		text: `How often have I encountered people who deem impossible everything they themselves cannot do, claiming that we demand more than human nature can endure. How much better I think of them than that! For they too can do much—only they do not wish to. And of those who have tried, to whom has success ever failed? Is it not that once you set to work, everything proves easier? It is not because things are difficult that we do not dare; rather, things are difficult because we do not dare.`,
		author: 'Seneca',
		themes: ['hardships', 'nature', 'endurance'],
		practices: []
	},

	{
		id: 73,
		text: `“Death and grievous labor wear dreadful faces.”

Our Virgil spoke excellently: they are dreadful not in reality, but only in appearance—that is, they seem so, and seeming is not the same as being. Are they truly as terrifying as rumor proclaims? Tell me, Lucilius, I ask you: why should a man fear labor, or a human being fear death?`,
		author: 'Seneca',
		themes: ['death', 'hardships', 'fear'],
		practices: []
	},

	{
		id: 74,
		text: `“Death and grievous labor wear dreadful faces.”

Not at all—if one can look straight at them and pierce the darkness with one’s gaze. Many things that appear terrifying at night become laughable by day.`,
		author: 'Seneca',
		themes: ['fear', 'death', 'hardships'],
		practices: []
	},

	{
		id: 75,
		text: `Nature has brought us into the world with lofty souls; and just as she has endowed some animals with ferocity, others with cunning, others with timidity, so she has given us a noble and divine spirit—one that seeks how to live honorably, not how to live safely. It resembles the universe itself, for it competes with it and follows it as far as the human step allows. It longs to distinguish itself and believes that it will be noticed and praised. It is master of all, stands above all, and therefore submits to nothing; nothing seems to it either burdensome or capable of bending a true man.`,
		author: 'Seneca',
		themes: ['nature', 'reason', 'endurance', 'honor', 'safety', 'hardships'],
		practices: []
	},

	{
		id: 76,
		text: `In this life, turbulent like the sea, there is one harbor: to despise future reversals, to stand firm and open, to meet the blows of fate head-on, without hiding or evading.`,
		author: 'Seneca',
		themes: ['endurance', 'tranquility', 'hardships', 'fortune', 'future'],
		practices: []
	},

	{
		id: 77,
		text: `If you wish to be freed from vices, avoid vicious examples. The miser, the seducer, the cruel man, the deceitful—everything that would harm you if it were nearby is already within you. Depart from them toward better models; live with the Catos, with Laelius, with Tubero; or, if the Greeks appeal to you, stay with Socrates and with Zeno. One will teach you how to die when necessary; another, how to do so before it becomes necessary. Live with Chrysippus and with Posidonius: they will impart to you knowledge of things divine and human, and they will bid you be active—not merely to speak finely, scattering words for the pleasure of listeners, but to harden your soul and stand firm against threats.`,
		author: 'Seneca',
		themes: ['vices', 'example'],
		practices: ['role model']
	},

	{
		id: 78,
		text: `If you wish to travel pleasantly, cure your companion! Live with a miser and a greedy man, and greed will cling to you; keep company with the arrogant, and arrogance will pass to you; in friendship with an executioner you will not rid yourself of cruelty; take a debauchee as a companion, and your own lust will be inflamed.`,
		author: 'Seneca',
		themes: ['travel', 'vices', 'example', 'cruelty', 'lust', 'greed', 'company'],
		practices: []
	},

	{
		id: 79,
		text: `All these vices and desires will torment and drain you in your wanderings by sea and by land, as long as you carry their causes within yourself. You wonder why flight has not helped you? Everything you flee from is with you. Reform yourself, then! Cast off the burden, restrain your desires within bounds, scrape every corruption from your soul!`,
		author: 'Seneca',
		themes: ['travel', 'vices', 'desires', 'escape'],
		practices: []
	},

	{
		id: 80,
		text: `Travel will make no one either a physician or an orator; a place teaches no art. Can wisdom, then, which surpasses all things, be picked up along the road? Believe me, there is no path that will lead you away from passions, from anger, from fear—and if such a path existed, the entire human race would set out upon it in close formation.`,
		author: 'Seneca',
		themes: ['travel', 'places', 'wisdom', 'anger', 'fear', 'desires'],
		practices: []
	},
	{
		id: 81,
		text: `A person breaks a hip, dislocates a joint: he should not get into a cart or on a ship, but call a doctor to set the bone and put the joint back in place. So, do you think the soul, broken and dislocated in many places, can be healed simply by changing locations? This illness is far too strong to be cured by traveling in a litter.`,
		author: 'Seneca',
		themes: ['travel', 'soul'],
		practices: []
	},

	{
		id: 82,
		text: `This journey will bring you no benefit: you will travel with your passions, and your misfortunes will not leave you behind. If only they did! Then they would be far away. But no—they are not with you in a place, they are in you, and therefore they will torment and afflict you everywhere with the same troubles. The sick must seek medicine, not new places.`,
		author: 'Seneca',
		themes: ['travel', 'places', 'vices'],
		practices: []
	},

	{
		id: 83,
		text: `We should spend time in scholarly pursuits and in the company of wise authorities, so as to master what has been investigated and to explore the unknown. Thus, the soul in need of redemption is set free from pitiful slavery. Until you know what to flee, what to pursue, what is necessary, what is needless, what is just, and what is honorable, you will not travel—you will merely wander.`,
		author: 'Seneca',
		themes: ['travel', 'soul', 'freedom', 'philosophy', 'wisdom'],
		practices: []
	},

	{
		id: 84,
		text: `How can travel help by itself? It will not temper the desire for pleasures, restrain greed, calm anger, resist the unbridled force of love, free the soul from other evils, clarify judgments, or dispel errors—at most, it might amuse you briefly with novelty, like a boy marveling at something unseen.

Otherwise, travel only increases the instability of an unhealthy mind, making it more frivolous and restless. Those who eagerly sought new places leave them even more eagerly, flitting like birds, departing faster than they arrived.

Travel may introduce you to other peoples, show mountains of extraordinary shape, traversed plains, valleys irrigated by inexhaustible waters, or, if you observe, the course of some river, swelling in summer floods like the Nile, or hiding and reappearing like the Tigris, or, like the Meander—a poet’s delight—winding in frequent curves, approaching its own bed and turning again before it merges with itself. Yet travel will not make you better or healthier.`,
		author: 'Seneca',
		themes: ['travel', 'pleasure', 'love', 'greed', 'anger', 'vices', 'places'],
		practices: []
	},

	{
		id: 85,
		text: `You consider the greatest evil to be the loss of loved ones—but this is as foolish as mourning leaves falling from beautiful trees that adorn your home. Regard everything you find pleasing as you do these leaves while they are green.

Each day will inevitably take something or someone from you; yet losing those you love, whom you regard as the delight of your life, is no more grievous than leaves falling: new leaves will grow, new companions will appear, though the old ones will not return.

- Precisely, not the old ones!

So too will you not remain the same! Every day, every hour, you change, but what is taken from others is obvious, and what is secretly taken from us we do not see. Others are taken from us, while we lose ourselves unnoticed. You do not think of this nor seek a remedy for these wounds, hoping for something or despairing over it. Yet the wise always mix hope with a measure of despair, and despair with a measure of hope.`,
		author: 'Seneca',
		themes: ['death', 'loss', 'hope', 'despair'],
		practices: []
	},

	{
		id: 86,
		text: `You consider death the greatest evil, yet if it has any harm, it is only this: people fear it before it comes. You will be frightened not by dangers themselves, but by suspicions; you will constantly suffer from empty fears. Even the world will give you reason to fear; once you are disheartened, you will not trust even safety itself. A soul accustomed to blind fear will be incapable of caring for its own preservation: it does not avoid, it flees, and dangers strike more easily from behind.`,
		author: 'Seneca',
		themes: ['death', 'fear', 'danger', 'safety'],
		practices: []
	},

	{
		id: 87,
		text: `You consider honors a good; thus you will suffer when this one becomes consul, or that one—even for the second time. You will envy everyone whose name appears more often in the annual lists [of magistrates]. Ambition will rob you of reason so completely that seeing one surpass you, you will forget all those you have left behind.`,
		author: 'Seneca',
		themes: ['honors', 'vanity', 'envy'],
		practices: []
	},

	{
		id: 88,
		text: `You consider wealth a good; therefore poverty will torment you, and most painfully—the imagined poverty: for though you possess much, you will imagine that you lack exactly as much as the one with more surpasses you.`,
		author: 'Seneca',
		themes: ['wealth', 'poverty', 'good'],
		practices: []
	},

	{
		id: 89,
		text: `How well it would be for some to go far away from themselves! Otherwise, they torment, spoil, and frighten themselves. What use is it to cross seas and change cities? If you wish to flee from what disturbs you, it is not the places that matter, but you. Imagine that you arrive in Athens, or on Rhodes; choose any country—does it matter what customs it holds? Your own habits travel with you!`,
		author: 'Seneca',
		themes: ['anxiety', 'fear', 'travel', 'places', 'flight'],
		practices: []
	},

	{
		id: 90,
		text: `A place will do little to grant tranquility if the soul does not belong to itself; and if it wishes, it will find a way to be alone even amidst affairs. Conversely, one who keeps choosing this or that place in pursuit of leisure will find distractions everywhere.

They say Socrates once replied, when someone complained that travel had brought no benefit:

- No wonder, you traveled with yourself!`,
		author: 'Seneca',
		themes: ['tranquility', 'travel', 'places'],
		practices: []
	},
	{
		id: 91,
		text: `One cannot boast of philosophy: for many who have flaunted it and taken pride in it, it became a source of danger. Let it free you from your own vices, rather than exposing the vices of others; let it not shun commonly accepted customs; let it strive not to give the impression that it condemns what it merely abstains from. One can be wise without displaying it, without provoking dislike.`,
		author: 'Seneca',
		themes: [
			'philosophy',
			'danger',
			'vices',
			'wisdom',
			'modesty',
			'showing off',
			'pride',
			'judgment'
		],
		practices: []
	},

	{
		id: 92,
		text: `Shelter yourself, as much as you can, in philosophy: it will hide you in its embrace; in its sanctuary you will be fully or mostly safe. Only those who walk the same road meet with danger.`,
		author: 'Seneca',
		themes: ['other people', 'philosophy', 'danger', 'safety'],
		practices: []
	},

	{
		id: 93,
		text: `Why fear a misfortune that may or may not happen to you? I mean fire, a house collapsing, and the like, which fall upon us but do not lie in wait. Better to watch and avoid that which stalks us and seeks to catch us. A carriage wreck, a fall—these are serious but rare; yet man threatens man daily.

Arm yourself against this danger, observe it with careful eyes: there is no misfortune more frequent, more persistent, more subtle. Storms warn before breaking, buildings crack before collapsing, smoke signals fire, but harm from a man is sudden and hides the closer it approaches.

You are mistaken if you trust the faces of strangers: their appearance is human, their soul bestial; or, if not, with beasts only the first encounter is dangerous, and those they pass do not seek again, for only necessity drives them to harm. Beasts attack from hunger or fear, but man delights in destroying man.

Still, think of danger from men so as not to forget human duty. Watch one so he does not harm you, another so you do not harm him. Rejoice in others’ successes, grieve at their failures, remember what you owe and what to guard against. What will you gain living this way? They may still harm you, but they cannot deceive you.`,
		author: 'Seneca',
		themes: ['other people', 'danger', 'deception', 'death'],
		practices: []
	},

	{
		id: 94,
		text: `He who comprehends eternity after death with his reason fears no army, no trumpet, no threats. And whence would fear come to one who hopes to die? Even he who claims the soul exists only while bound to the flesh and dissipates upon release still seeks to be useful after death. Let him vanish from sight, yet

– The courage of a man lives in the soul, and the ancient glory of his lineage…

Consider for yourself how beneficial good examples are—and you will see that the memory of great men is as valuable as their presence.`,
		author: 'Seneca',
		themes: ['soul', 'body', 'death', 'after death', 'fear', 'courage'],
		practices: ['memento mori', 'role model']
	},

	{
		id: 95,
		text: `The day you fear as the last will be your birth into eternal life. Cast off the burden! Why do you hesitate, as if you have not already left the body that hid you once? You linger and resist, yet even then the greatest effort of the mother expelled you.

You groaned and wept; weeping is the work of the newborn, then it could be forgiven: you came forth irrational and ignorant, barely freed from the soft warmth of your mother’s womb, met the open air, then were startled by the harsh touch of rigid hands, and, tender and uncomprehending, you were bewildered before the unknown.

Now it is no novelty to separate from that of which you were part; so part indifferently from the unnecessary members and discard this long-inhabited body. It will be cut, buried, destroyed. And why mourn? It is ordinary! For the newborn’s shell most often perishes. Why cherish as your own what merely clothes you? The day will come that strips away the coverings and brings you to light from the foul, stinking womb.`,
		author: 'Seneca',
		themes: ['soul', 'body', 'death', 'after death'],
		practices: []
	},

	{
		id: 96,
		text: `Nature searches us at the exit, just as at the entrance. We cannot take more than we brought; and a large part of what you carried into life must be left behind. You will shed the outer covering—skin, lose the flesh and flowing blood, lose the bones and sinews that hold all the fleeting and unstable together.`,
		author: 'Seneca',
		themes: ['death', 'body'],
		practices: []
	},

	{
		id: 97,
		text: `Do not fear, anticipating this decisive hour [of death]: it is final not for the soul, but for the body. However many things there are around, see in them merely luggage left at the inn where you have briefly stayed.`,
		author: 'Seneca',
		themes: ['death', 'soul', 'body'],
		practices: []
	},

	{
		id: 98,
		text: `According to nature, our spirit should strive toward boundless expanse, for the human soul is great and noble, refusing limits except those of the gods.

First, it will not accept as its homeland insignificant Ephesus, cramped Alexandria, or any other crowded, overbuilt place. Its boundary is all that is enclosed by the last and all-encompassing circle, within which lie lands and seas, within which air unites and separates the divine and human, within which so many gods are placed as to each perform their work.

Second, it will not accept a short allotted span:

– All years belong to me, – it says – no century is forbidden to a great mind, all times are open to thought. When the final day comes and separates the divine from the human, mingled now, I will leave this body where I found it, and return to the gods. Even now I am not alien to them, though the heavy earthly prison holds me.

This slow mortal life is merely a prologue to a better, long life. Just as nine months conceal us in the maternal womb, preparing us not to live there but elsewhere, ready to breathe and exist without an external shell, so through the term from infancy to old age we mature for a new birth. A new manifestation to light and a new order of things awaits us. Without such an interval, we could not endure the heavens.`,
		author: 'Seneca',
		themes: ['soul', 'death', 'lifespan', 'after death'],
		practices: []
	},

	{
		id: 99,
		text: `This [(excessive theorizing)] should not be our goal—to reason cunningly and reduce philosophy from its heights to such narrow confines. Is it not better to take the straight and open path than to twist and struggle out of this confusion? All these disputes are merely games for those who try to outwit one another.`,
		author: 'Seneca',
		themes: ['philosophy', 'simplicity'],
		practices: []
	},

	{
		id: 100,
		text: `Reputation demands a loud voice; recognition does not: it can be content with unspoken judgment and be complete not only amid silence but also amid reproachful cries. I will explain the difference between recognition and fame: fame is formed from the judgments of many, recognition—from the judgment of the good alone.`,
		author: 'Seneca',
		themes: ['fame', 'others’ opinion', 'recognition', 'judgment'],
		practices: []
	},
	{
		id: 101,
		text: `One must rid oneself of the thirst for life and learn one thing: it is indifferent when that which will inevitably happen to you occurs. In life, what matters is the good, not a long lifespan; and often it is precisely the shortness of life that is its benefit.`,
		author: 'Seneca',
		themes: ['life', 'death', 'good'],
		practices: ['memento mori']
	},

	{
		id: 102,
		text: `How to avoid these anxieties [about death]? One thing is needed: that our life does not rush ahead, that it is focused—since he who wastes the present depends on the future.

And when I have settled with myself, when a calm mind knows that day and age are the same, it looks down on all days and deeds to come and laughs aloud at the succession of times. Are the changes and uncertainties of chance terrifying if you are beforehand serene before the unknown?

So hurry to live, my Lucilius, and count each day as a whole life. He who has learned to live so, for whom each evening is the end of life, knows no fear. He who lives in hope misses the nearest time—and then greed and pitiful fear, which makes all things around miserable, attack him.`,
		author: 'Seneca',
		themes: ['fear', 'anxiety', 'calm', 'death', 'lifespan', 'life', 'present', 'future'],
		practices: ['memento mori']
	},

	{
		id: 103,
		text: `The greatest flaw of life is its perpetual incompleteness due to our habit of putting things off day by day. He who completes the work of his life each evening needs no time. Meanwhile, the need for it gives birth to fear and longing for the future, wearing out the soul. Nothing is more pitiable than doubts about how the coming day will end. Whatever lies ahead, the anxious mind will suffer an inexplicable fear.`,
		author: 'Seneca',
		themes: ['plans', 'fear', 'procrastination', 'future', 'anxiety'],
		practices: []
	},

	{
		id: 104,
		text: `Today has happened what can happen every day [death]—and is there anything sillier than to be surprised by it? Unyielding necessity has set a certain limit for all of us, yet none knows how near it is. Let us prepare the soul as if we have reached the end; postpone nothing, so that each day we reckon with life.`,
		author: 'Seneca',
		themes: ['plans', 'life', 'death', 'lifespan'],
		practices: ['memento mori']
	},

	{
		id: 105,
		text: `We plan, having voyaged to foreign shores, to return home after long, to expect late reward for military service and camp labors, for provincial administration, for promotion from office to office—but death stands nearby. And since we think of it only at the death of others, we are reminded of human mortality by new examples, though we remember them only while they are before our eyes.`,
		author: 'Seneca',
		themes: ['future', 'plans', 'death'],
		practices: ['memento mori']
	},

	{
		id: 106,
		text: `How foolish to plan for a whole life without even mastering tomorrow! What madness to hope today for a distant future!

I will buy, I will build, I will lend and collect, I will attain these offices, and then, tired and sated, I will spend my old age in rest.

Believe me, even for the fortunate, the future is uncertain. No one should promise themselves anything: even what we hold slips from our hands, and this very hour, already grasped, may be snatched by chance. Time rolls according to a set law, but by a dark path; what care I for the future of nature, which is clear, if my own future is unclear?`,
		author: 'Seneca',
		themes: ['future', 'plans', 'happiness', 'success', 'old age'],
		practices: []
	},

	{
		id: 107,
		text: `Each day, each hour shows us that we are nothing. New evidence reminds those who have forgotten their mortality and turns their gaze from designs spanning eternity to death.

You may ask, why such a beginning? – You knew Cornelius Senecio, a Roman equestrian, brilliant and diligent; he advanced by his own efforts, starting small, and the rest of the path lay open to him. For dignity grows faster than it arises. And money, once escaped from poverty, lingers nearby for long. Senecio approached wealth, aided by two qualities: the ability to acquire and to preserve—and either alone can make anyone rich.

And this man, extremely temperate and caring for his body no less than his property, in the morning visited me as usual, spent the day at the bedside of a hopelessly ill friend, then dined cheerfully, and in the evening fell ill with a sudden disease—a spotted toad that crushed his throat so he could barely breathe—only until dawn.

Thus he passed away, hours after having done everything proper for a healthy, strong man. He, who had put money in motion by land and sea, who overlooked no source of gain and was approaching contracts, was carried off in the midst of his business pursuits, in the heat of the chase for wealth.`,
		author: 'Seneca',
		themes: ['death', 'wealth', 'health', 'body', 'mortality'],
		practices: ['memento mori']
	},

	{
		id: 108,
		text: `As for the brevity of life, if compared to the universe, we are all equal—youth and old alike. What we receive from the lifespan of the whole universe cannot even be called a small portion: for even the smallest portion is a portion, and our lifespan approaches nothing. Yet, such is our folly!—people strive to extend it.`,
		author: 'Seneca',
		themes: ['death', 'lifespan', 'insignificance'],
		practices: []
	},

	{
		id: 109,
		text: `Nothing harms the one who has become nothing; if something does, it means he is still alive. Do you think it hurts him that he has become nothing? Or that he still exists? Nonexistence causes no pain: what can one feel who is no longer? Yet being is not painful: he who exists has escaped the greatest harm brought by death—nonexistence.`,
		author: 'Seneca',
		themes: ['death'],
		practices: []
	},

	{
		id: 110,
		text: `The inevitable must be accepted indifferently. Has anything incredible, unseen occurred? How many people now hire servants for funerals! How many purchase a burial garment! How many will mourn after you! As soon as you think he was still a child, also remember he was a human; nothing is promised to a human for certain, and fortune need not bring him to old age, but may release him whenever it pleases.`,
		author: 'Seneca',
		themes: ['death', 'lifespan', 'fortune', 'grief', 'loss'],
		practices: []
	},
	{
		id: 111,
		text: `There is nothing more foolish than grieving for the sake of glory and crying for public approval. In my view, a wise man cries either when he allows himself to, or when tears flow of their own accord. When the first news of a sad death strikes you, when we hold the body that will pass from our arms to the pyre—tears are drawn by natural necessity, and the mind, struck by grief, shakes the eyes along with the whole body. But there are tears we allow ourselves, for example, when recalling those we have lost, and there is something sweet in sorrow. Let tears flow naturally: even calm and reserved people can shed them. They often flow without diminishing the dignity of the wise man, with such propriety that they embody full measure of both humanity and dignity.`,
		author: 'Seneca',
		themes: ['death', 'grief', 'sorrow', 'loss', 'showing off'],
		practices: []
	},

	{
		id: 112,
		text: `By its nature, philosophy endows its followers, perhaps more than anything else, with the ability to rise above others in debate, to distinguish falsehood from truth, to refute one thing and confirm another. In any case, professional orators, whenever they enter into discussion with philosophers, become perplexed and appear bewildered, involuntarily contradicting themselves. But if orators, whose lives revolve around debate, are outmatched by philosophers in argument, what must happen to other people?`,
		author: 'Gaius Musonius Rufus',
		themes: ['philosophy', 'debate'],
		practices: []
	},

	{
		id: 113,
		text: `One vice never leaves us: conforming to the example of the majority, looking at what is customary rather than what is right. We depart from nature and surrender to the crowd, from which nothing good can come, a crowd that is itself fickle. If it sees a man brave in his grief—it calls him godless and wild; sees another clinging weakly to a dead body—it calls him feeble and powerless.`,
		author: 'Seneca',
		themes: ['sorrow', 'loss', 'society', 'other people’s opinion', 'death', 'nature'],
		practices: []
	},

	{
		id: 114,
		text: `Since fearlessness, courage, and boldness are derivatives of bravery, how else can a man acquire them than by firmly believing that death and deprivation are not evils? For it is precisely these things—death and misfortunes—that unbalance and frighten people when they believe them to be evil. Only philosophy can teach that they are not evil. Therefore, if kings must possess bravery, and they must possess it more than anyone else, they must study philosophy, for by no other means can they become brave.`,
		author: 'Gaius Musonius Rufus',
		themes: ['bravery', 'philosophy', 'hardship', 'death', 'evil', 'tranquility'],
		practices: []
	},

	{
		id: 115,
		text: `Public grief requires more than mere sorrow: how many grieve for themselves alone? People moan more clearly when heard, and calm and silent in private, erupt again in tears at the mere sight of someone else. Then they tear at their hair, though they could do so more freely when unobserved; then they call out death, then roll on the bed. Without an audience, grief quiets.`,
		author: 'Seneca',
		themes: ['public grief', 'other people', 'loss', 'death'],
		practices: []
	},

	{
		id: 116,
		text: `It is important for a king to maintain self-control and demand it from his subjects, so that under his sober rule and proper obedience there is no moral laxity from either party. No pursuit other than philosophy develops self-control. It teaches one to rise above pleasures and greed, to admire frugality and avoid waste; it teaches a sense of shame and care over one’s words; it trains in discipline, order, politeness, and generally in what is proper in action and behavior.`,
		author: 'Gaius Musonius Rufus',
		themes: ['philosophy', 'vices', 'self-control', 'moderation', 'desires'],
		practices: []
	},

	{
		id: 117,
		text: `Do I then call you to insensitivity, demand that at a funeral [of your son] your expression remain unchanged, forbid your heart from contracting? No, of course not! For that is not virtue but inhumanity—viewing the funeral of a loved one with the same gaze as at their living self, feeling nothing when they are first taken from you. But even if I were to forbid all this; there are things beyond our control—sometimes tears flow no matter how we restrain them, and when shed, they ease the soul. Let them flow, but do not command them; let them flow as feeling demands, not as imitation.`,
		author: 'Seneca',
		themes: ['grief', 'loss', 'sorrow', 'death', 'tranquility'],
		practices: []
	},

	{
		id: 118,
		text: `It is fitting, or rather absolutely necessary, for a king to administer justice among his subjects, so that no one may have more or less than he deserves, but may receive honor or punishment as he merits. But how can one achieve this if he is unjust? And how can one be just who does not understand the nature of justice? This is yet another reason why a king must study philosophy, for without it he cannot know what justice and the just are.`,
		author: 'Gaius Musonius Rufus',
		themes: ['philosophy', 'justice', 'power'],
		practices: []
	},

	{
		id: 119,
		text: `Life is neither good nor evil, but merely a vessel for good and evil.`,
		author: 'Seneca',
		themes: ['life', 'good', 'evil'],
		practices: []
	},

	{
		id: 120,
		text: `Only a philosopher can distinguish good from evil, the advantageous from the harmful, the useful from the harmful, for he is constantly occupied with these questions and strives not to be ignorant in these matters, making it his business to understand what leads a person to happiness or misfortune.`,
		author: 'Gaius Musonius Rufus',
		themes: ['philosophy', 'good', 'evil', 'happiness', 'misfortune'],
		practices: []
	}
];

export default quotes;
