<script>
	import IconSearch from '~icons/ph/magnifying-glass-bold';
	import IconX from '~icons/ph/x-bold';
	import { goto } from '$app/navigation';
	let query = '';

	function refresh() {
		query = query.trim();
		if (query) {
			goto('/search?q=' + query);
			getResults();
		}
	}

	let sources = [
		{
			id: 'http://arxiv.org/abs/2206.11223v1',
			updated: '2022-06-08T20:25:58Z',
			published: '2022-06-08T20:25:58Z',
			title: 'VRChain: A Blockchain-Enabled Framework for Visual Homing and Navigation\n  Robots',
			summary:
				"Visual homing is a lightweight approach to robot visual navigation. Based\nupon stored visual information of a home location, the navigation back to this\nlocation can be accomplished from any other location in which this location is\nvisible by comparing home to the current image. However, a key challenge of\nvisual homing is that the target home location must be within the robot's field\nof view (FOV) to start homing. Therefore, this work addresses such a challenge\nby integrating blockchain technology into the visual homing navigation system.\nBased on the decentralized feature of blockchain, the proposed solution enables\nvisual homing robots to share their visual homing information and synchronously\naccess the stored data (visual homing information) in the decentralized ledger\nto establish the navigation path. The navigation path represents a per-robot\nsequence of views stored in the ledger. If the home location is not in the FOV,\nthe proposed solution permits a robot to find another robot that can see the\nhome location and travel towards that desired location. The evaluation results\ndemonstrate the efficiency of the proposed framework in terms of end-to-end\nlatency, throughput, and scalability.",
			author: ['Mohamed Rahouti', 'Damian Lyons', 'Lesther Santana'],
			link: ['http://arxiv.org/abs/2206.11223v1', 'http://arxiv.org/pdf/2206.11223v1'],
			category: ['cs.RO'],
			primary_category: 'cs.RO',
			comment: '6 pages, 7 figures',
			affiliation: '',
			journal_ref: '',
			doi: ''
		},
		{
			id: 'http://arxiv.org/abs/2308.16602v1',
			updated: '2023-08-31T10:03:29Z',
			published: '2023-08-31T10:03:29Z',
			title: 'Design Challenges for the Implementation of Smart Homes',
			summary:
				'Home automation for many years had faced challenges that limit its spreading\naround the world. These challenges caused by the high cost of Own such a home,\ninflexibility system (cannot be monitored outside the home) and issues to\nachieve optimal security. Our main objective is to design and implement a smart\nhome model that is simple, affordable to the users. The proposed system provide\nflexibility to monitor the home, using the reliable cellular network. The user\nwill be able what is inside the home when he /she is away from home. In\naddition to that, our model overcome the issue of the security by providing\ndifferent sensors that detects smoke, gas, leakage of water and incases of\nburglary. Moreover, a camera will be available in the home to give a full view\nfor the user when he/she is outside the home. The user will be informed by an\napplication on his/she phone incase if there is a fire, water leakage and if\nsomeone break into the house. This will give the user a chance to take an\naction if such cases happened. Furthermore, the user can monitor the lighting\nsystem of the home, by giving the user a chance to turn the lights on and off\nremotely.',
			author: ['Nesreen Mufid'],
			link: ['http://arxiv.org/abs/2308.16602v1', 'http://arxiv.org/pdf/2308.16602v1'],
			category: ['cs.CR', 'eess.SP'],
			primary_category: 'cs.CR',
			comment: '',
			affiliation: '',
			journal_ref: '',
			doi: ''
		},
		{
			id: 'http://arxiv.org/abs/1910.13195v1',
			updated: '2019-10-29T11:06:14Z',
			published: '2019-10-29T11:06:14Z',
			title: "User's Centrality Analysis for Home Location Estimation",
			summary:
				"User attributes, such as home location, are useful for many applications.\nMany researchers have been tackling how to estimate users' home locations using\nrelationships among users. It is known that the home locations of certain\nusers, such as celebrities, are hard to estimate using relationships. However,\nbecause estimating the home locations of all celebrities is not actually hard,\nit is important to clarify the characteristics of users whose home locations\nare hard to estimate. We analyze whether centralities, which represent users'\ncharacteristics, and the tendency to have the same home locations as friends\nare related. The results indicate that PageRank and HITS scores are related to\nwhether users have the same home location as friends, and that users with\nhigher HITS scores have the same home location as their friends less often.\nThis result indicates that there are two types of users whose home locations\nare difficult to estimate: hub users who follow many celebrities and authority\nusers who are celebrities.",
			author: ['Shiori Hironaka', 'Mitsuo Yoshida', 'Kyoji Umemura'],
			link: [
				'http://dx.doi.org/10.1145/3358695.3360930',
				'http://arxiv.org/abs/1910.13195v1',
				'http://arxiv.org/pdf/1910.13195v1'
			],
			category: ['cs.SI'],
			primary_category: 'cs.SI',
			comment: 'published at ABCSS 2019 on WI 2019',
			affiliation: '',
			journal_ref: '',
			doi: '10.1145/3358695.3360930'
		},
		{
			id: 'http://arxiv.org/abs/2308.06695v1',
			updated: '2023-08-13T06:17:24Z',
			published: '2023-08-13T06:17:24Z',
			title: 'Helion: Enabling Natural Testing of Smart Homes',
			summary:
				"Prior work has developed numerous systems that test the security and safety\nof smart homes. For these systems to be applicable in practice, it is necessary\nto test them with realistic scenarios that represent the use of the smart home,\ni.e., home automation, in the wild. This demo paper presents the technical\ndetails and usage of Helion, a system that uses n-gram language modeling to\nlearn the regularities in user-driven programs, i.e., routines developed for\nthe smart home, and predicts natural scenarios of home automation, i.e., event\nsequences that reflect realistic home automation usage. We demonstrate the\nHelionHA platform, developed by integrating Helion with the popular Home\nAssistant smart home platform. HelionHA allows an end-to-end exploration of\nHelion's scenarios by executing them as test cases with real and virtual smart\nhome devices.",
			author: [
				'Prianka Mandal',
				'Sunil Manandhar',
				'Kaushal Kafle',
				'Kevin Moran',
				'Denys Poshyvanyk',
				'Adwait Nadkarni'
			],
			link: [
				'http://dx.doi.org/10.1145/3611643.3613095',
				'http://arxiv.org/abs/2308.06695v1',
				'http://arxiv.org/pdf/2308.06695v1'
			],
			category: ['cs.CR', 'cs.SE'],
			primary_category: 'cs.CR',
			comment:
				'To be published in Proceedings of the 31st ACM Joint European\n  Software Engineering Conference and Symposium on the Foundations of Software\n  Engineering. arXiv admin note: text overlap with arXiv:1907.00124',
			affiliation: '',
			journal_ref: '',
			doi: '10.1145/3611643.3613095'
		},
		{
			id: 'http://arxiv.org/abs/1009.5398v1',
			updated: '2010-09-27T20:58:05Z',
			published: '2010-09-27T20:58:05Z',
			title: 'A Scenario-Based Mobile Application for Robot-Assisted Smart Digital\n  Homes',
			summary:
				'Smart homes are becoming more popular, as every day a new home appliance can\nbe digitally controlled. Smart Digital Homes are using a server to make\ninteraction with all the possible devices in one place, on a computer or\nwebpage. In this paper we designed and implemented a mobile application using\nWindows Mobile platform that can connect to the controlling server of a Smart\nHome and grants the access to the Smart Home devices and robots everywhere\npossible. UML diagrams are presented to illustrate the application design\nprocess. Robots are also considered as devices that are able to interact to\nother object and devices. Scenarios are defined as a set of sequential actions\nto help manage different tasks all in one place. The mobile application can\nconnect to the server using GPRS mobile internet and Short Message System\n(SMS). Interactive home map is also designed for easier status-checking and\ninteracting with the devices using the mobile phones.',
			author: ['Ali Reza Manashty', 'Amir Rajabzadeh', 'Zahra Forootan Jahromi'],
			link: ['http://arxiv.org/abs/1009.5398v1', 'http://arxiv.org/pdf/1009.5398v1'],
			category: ['cs.RO', '93C95', 'J.7'],
			primary_category: 'cs.RO',
			comment:
				'8 pages, 8 figures, IEEE Publication format, Keywords- smart homes;\n  mobile applications; remote home controls; automated digital homes; robot\n  assisted at home; general packet radio service (GPRS); short message system\n  (SMS); robot assisted at home; scenario based smart home',
			affiliation: '',
			journal_ref:
				'International Journal of Computer Science and Information Security\n  (IJCSIS), Vol. 8, No. 5, August 2010, ISSN 1947-5500, Pages 89-96',
			doi: ''
		},
		{
			id: 'http://arxiv.org/abs/1907.00124v1',
			updated: '2019-06-29T01:25:29Z',
			published: '2019-06-29T01:25:29Z',
			title: 'Helion: Enabling a Natural Perspective of Home Automation',
			summary:
				"Security researchers have recently discovered significant security and safety\nissues related to home automation and developed approaches to address them.\nSuch approaches often face design and evaluation challenges which arise from\ntheir restricted perspective of home automation that is bounded by the IoT apps\nthey analyze. The challenges of past work can be overcome by relying on a\ndeeper understanding of realistic home automation usage. More specifically, the\navailability of natural home automation scenarios, i.e., sequences of home\nautomation events that may realistically occur in an end-user's home, could\nhelp security researchers design better security/safety systems. This paper\npresents Helion, a framework for building a natural perspective of home\nautomation. Helion identifies the regularities in user-driven home automation,\ni.e., from user-driven routines that are increasingly being created by users\nthrough intuitive platform UIs. Our intuition for designing Helion is that\nsmart home event sequences created by users exhibit an inherent set of semantic\npatterns, or naturalness that can be modeled and used to generate valid and\nuseful scenarios. To evaluate our approach, we first empirically demonstrate\nthat this naturalness hypothesis holds, with a corpus of 30,518 home automation\nevents, constructed from 273 routines collected from 40 users. We then\ndemonstrate that the scenarios generated by Helion are reasonable and valid\nfrom an end-user perspective, through an evaluation with 16 external\nevaluators. We further show the usefulness of Helion's scenarios by generating\n17 home security/safety policies with significantly less effort than existing\napproaches. We conclude by discussing key takeaways and future research\nchallenges enabled by Helion's natural perspective of home automation.",
			author: [
				'Sunil Manandhar',
				'Kevin Moran',
				'Kaushal Kafle',
				'Ruhao Tang',
				'Denys Poshyvanyk',
				'Adwait Nadkarni'
			],
			link: ['http://arxiv.org/abs/1907.00124v1', 'http://arxiv.org/pdf/1907.00124v1'],
			category: ['cs.CR'],
			primary_category: 'cs.CR',
			comment: '',
			affiliation: '',
			journal_ref: '',
			doi: ''
		},
		{
			id: 'http://arxiv.org/abs/1909.09848v1',
			updated: '2019-09-21T15:57:09Z',
			published: '2019-09-21T15:57:09Z',
			title:
				'IoT Inspector: Crowdsourcing Labeled Network Traffic from Smart Home\n  Devices at Scale',
			summary:
				"The proliferation of smart home devices has created new opportunities for\nempirical research in ubiquitous computing, ranging from security and privacy\nto personal health. Yet, data from smart home deployments are hard to come by,\nand existing empirical studies of smart home devices typically involve only a\nsmall number of devices in lab settings. To contribute to data-driven smart\nhome research, we crowdsource the largest known dataset of labeled network\ntraffic from smart home devices from within real-world home networks. To do so,\nwe developed and released IoT Inspector, an open-source tool that allows users\nto observe the traffic from smart home devices on their own home networks.\nSince April 2019, 4,322 users have installed IoT Inspector, allowing us to\ncollect labeled network traffic from 44,956 smart home devices across 13\ncategories and 53 vendors. We demonstrate how this data enables new research\ninto smart homes through two case studies focused on security and privacy.\nFirst, we find that many device vendors use outdated TLS versions and advertise\nweak ciphers. Second, we discover about 350 distinct third-party advertiser and\ntracking domains on smart TVs. We also highlight other research areas, such as\nnetwork management and healthcare, that can take advantage of IoT Inspector's\ndataset. To facilitate future reproducible research in smart homes, we will\nrelease the IoT Inspector data to the public.",
			author: ['Danny Yuxing Huang', 'Noah Apthorpe', 'Gunes Acar', 'Frank Li', 'Nick Feamster'],
			link: [
				'http://dx.doi.org/10.1145/3397333',
				'http://arxiv.org/abs/1909.09848v1',
				'http://arxiv.org/pdf/1909.09848v1'
			],
			category: ['cs.CR'],
			primary_category: 'cs.CR',
			comment: '',
			affiliation: '',
			journal_ref:
				'Proceedings of the ACM on Interactive, Mobile, Wearable and\n  Ubiquitous Technologies. Volume 4, Issue 2, Article 46. June 2020',
			doi: '10.1145/3397333'
		},
		{
			id: 'http://arxiv.org/abs/2102.11398v1',
			updated: '2021-02-22T23:03:36Z',
			published: '2021-02-22T23:03:36Z',
			title: 'Home and destination attachment: study of cultural integration on\n  Twitter',
			summary:
				"The cultural integration of immigrants conditions their overall\nsocio-economic integration as well as natives' attitudes towards globalisation\nin general and immigration in particular. At the same time, excessive\nintegration -- or acculturation -- can be detrimental in that it implies\nforfeiting one's ties to the home country and eventually translates into a loss\nof diversity (from the viewpoint of host countries) and of global connections\n(from the viewpoint of both host and home countries). Cultural integration can\nbe described using two dimensions: the preservation of links to the home\ncountry and culture, which we call home attachment, and the creation of new\nlinks together with the adoption of cultural traits from the new residence\ncountry, which we call destination attachment. In this paper we introduce a\nmeans to quantify these two aspects based on Twitter data. We build home and\ndestination attachment indexes and analyse their possible determinants (e.g.,\nlanguage proximity, distance between countries), also in relation to Hofstede's\ncultural dimension scores. The results stress the importance of host language\nproficiency to explain destination attachment, but also the link between\nlanguage and home attachment. In particular, the common language between home\nand destination countries corresponds to increased home attachment, as does low\nproficiency in the host language. Common geographical borders also seem to\nincrease both home and destination attachment. Regarding cultural dimensions,\nlarger differences among home and destination country in terms of\nIndividualism, Masculinity and Uncertainty appear to correspond to larger\ndestination attachment and lower home attachment.",
			author: ['Jisu Kim', 'Alina Sîrbu', 'Giulio Rossetti', 'Fosca Giannotti', 'Hillel Rapoport'],
			link: ['http://arxiv.org/abs/2102.11398v1', 'http://arxiv.org/pdf/2102.11398v1'],
			category: ['cs.LG'],
			primary_category: 'cs.LG',
			comment: '19 pages, 10 figure and 4 tables',
			affiliation: '',
			journal_ref: '',
			doi: ''
		},
		{
			id: 'http://arxiv.org/abs/1608.08331v1',
			updated: '2016-08-30T05:20:41Z',
			published: '2016-08-30T05:20:41Z',
			title:
				'Analysis of Home Location Estimation with Iteration on Twitter Following\n  Relationship',
			summary:
				"User's home locations are used by numerous social media applications, such as\nsocial media analysis. However, since the user's home location is not generally\nopen to the public, many researchers have been attempting to develop a more\naccurate home location estimation. A social network that expresses\nrelationships between users is used to estimate the users' home locations. The\nnetwork-based home location estimation method with iteration, which propagates\nthe estimated locations, is used to estimate more users' home locations. In\nthis study, we analyze the function of network-based home location estimation\nwith iteration while using the social network based on following relationships\non Twitter. The results indicate that the function that selects the most\nfrequent location among the friends' location has the best accuracy. Our\nanalysis also shows that the 88% of users, who are in the social network based\non following relationships, has at least one correct home location within\none-hop (friends and friends of friends). According to this characteristic of\nthe social network, we indicate that twice is sufficient for iteration.",
			author: ['Shiori Hironaka', 'Mitsuo Yoshida', 'Kyoji Umemura'],
			link: [
				'http://dx.doi.org/10.1109/ICAICTA.2016.7803100',
				'http://arxiv.org/abs/1608.08331v1',
				'http://arxiv.org/pdf/1608.08331v1'
			],
			category: ['cs.SI'],
			primary_category: 'cs.SI',
			comment:
				'The 2016 International Conference on Advanced Informatics: Concepts,\n  Theory and Application (ICAICTA2016)',
			affiliation: '',
			journal_ref: '',
			doi: '10.1109/ICAICTA.2016.7803100'
		},
		{
			id: 'http://arxiv.org/abs/1708.05044v1',
			updated: '2017-08-16T19:20:57Z',
			published: '2017-08-16T19:20:57Z',
			title: 'Spying on the Smart Home: Privacy Attacks and Defenses on Encrypted IoT\n  Traffic',
			summary:
				"The growing market for smart home IoT devices promises new conveniences for\nconsumers while presenting new challenges for preserving privacy within the\nhome. Many smart home devices have always-on sensors that capture users'\noffline activities in their living spaces and transmit information about these\nactivities on the Internet. In this paper, we demonstrate that an ISP or other\nnetwork observer can infer privacy sensitive in-home activities by analyzing\nInternet traffic from smart homes containing commercially-available IoT devices\neven when the devices use encryption. We evaluate several strategies for\nmitigating the privacy risks associated with smart home device traffic,\nincluding blocking, tunneling, and rate-shaping. Our experiments show that\ntraffic shaping can effectively and practically mitigate many privacy risks\nassociated with smart home IoT devices. We find that 40KB/s extra bandwidth\nusage is enough to protect user activities from a passive network adversary.\nThis bandwidth cost is well within the Internet speed limits and data caps for\nmany smart homes.",
			author: [
				'Noah Apthorpe',
				'Dillon Reisman',
				'Srikanth Sundaresan',
				'Arvind Narayanan',
				'Nick Feamster'
			],
			link: ['http://arxiv.org/abs/1708.05044v1', 'http://arxiv.org/pdf/1708.05044v1'],
			category: ['cs.CR'],
			primary_category: 'cs.CR',
			comment:
				'16 pages, 9 figures. This article draws heavily from arXiv:1705.06805\n  and arXiv:1705.06809',
			affiliation: '',
			journal_ref: '',
			doi: ''
		}
	];

	function removeSource(obj) {
		let index = sources.find(({ title }) => title === obj.title);
		sources = sources.filter((_, i) => i !== index);
	}
</script>

<svelte:head>
	<title>sources - papercut</title>
	<meta name="description" content="your sources" />
</svelte:head>

<div class="content">
	<div class="search">
		<a href="/"><h1><span class="paper">paper</span><span class="slash">/</span>cut</h1></a>
		<form class="searchbar" on:submit|preventDefault={() => refresh()}>
			<button type="submit" class="submit"><IconSearch style="font-size: 1.3rem;" /></button>
			<input
				type="text"
				placeholder="search..."
				bind:value={query}
				required
				oninvalid="this.setCustomValidity('please enter a valid search term! only letters and numbers are allowed.')"
				oninput="this.setCustomValidity('')"
				pattern="[a-zA-Z0-9 ]+"
			/>
		</form>
		<!-- <div class="links">
			<a href="/">&lt;&lt;&lt; back to homepage</a>
			<a href="/adv-search" style="float:right;">advanced search</a>
		</div> -->
	</div>
	<div class="container">
		{#if sources && sources.length > 0}
			{#each sources as source}
				<div class="source">
					<button class="close" on:click|preventDefault={() => removeSource(source)}
						><IconX style="font-size: 1.2rem;" /></button
					>
					<div class="stuff">
						<h3>{source.title}</h3>
						<a href={source.id} target="_blank">Source URL</a>
					</div>
				</div>
			{/each}
		{:else if sources && sources.length === 0}
			<div class="results-box">
				<p>No results found for "{query}"</p>
			</div>
		{:else}
			<div class="results-box">
				<div class="loader"></div>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.container {
		@include flex(column, default, default);
		gap: 2vw;
		padding: 3vw 2vw;
		height: 100%;
	}

	.content {
		@include flex(column, default, default);
		gap: 2vw;
		padding: 3vw 2vw;
		height: 100%;
	}

	.search {
		padding: 0 3rem;
		@include flex(row, default, center);

		h1 {
			width: 11rem;
			font-size: 2rem;
			margin: 0;
		}
	}

	form {
		button {
			padding: 0.6rem 0.8rem;
		}
		input {
			font-size: 1.2rem;
			padding: 0.6rem 0.8rem 0.6rem 0;
		}
	}

	.source {
		padding: 1rem 1rem 2rem;
		background-color: var(--bg-2);
		display: flex;
	}
	.close {
		width: 7%;
		transition: 0.2s;
	}
	.close:hover {
		color: red;
	}
	.stuff {
	}
	.results-box {
		margin: 0 3rem;
		background-color: var(--bg-2);
		padding: 1rem;
		height: 100%;
		@include flex(column, center, center);
	}
</style>
