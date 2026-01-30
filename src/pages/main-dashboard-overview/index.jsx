import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PrimaryNavigation from '../../components/ui/PrimaryNavigation';
import RealtimeStatusIndicator from '../../components/ui/RealtimeStatusIndicator';
import GlobalFilterControls, { FilterProvider } from '../../components/ui/GlobalFilterControls';
import KPIMetricCard from './components/KPIMetricCard';
import ChallengeWidget from './components/ChallengeWidget';
import LiveActivityFeed from './components/LiveActivityFeed';
import QuickActionPanel from './components/QuickActionPanel';
import Icon from '../../components/AppIcon';

const MainDashboardOverview = () => {
  const [kpiMetrics] = useState([
  {
    id: 'active_challenges',
    title: 'Active Challenges',
    value: '24',
    unit: '',
    trend: 'up',
    trendValue: '+12%',
    icon: 'Target',
    color: 'primary',
    sparklineData: [45, 52, 48, 61, 58, 65, 72]
  },
  {
    id: 'total_participants',
    title: 'Total Participants',
    value: '1,847',
    unit: '',
    trend: 'up',
    trendValue: '+18%',
    icon: 'Users',
    color: 'success',
    sparklineData: [1200, 1350, 1420, 1580, 1650, 1750, 1847]
  },
  {
    id: 'engagement_rate',
    title: 'Engagement Rate',
    value: '87.3',
    unit: '%',
    trend: 'up',
    trendValue: '+5.2%',
    icon: 'TrendingUp',
    color: 'accent',
    sparklineData: [78, 80, 82, 84, 85, 86, 87]
  },
  {
    id: 'completion_rate',
    title: 'Completion Rate',
    value: '72.8',
    unit: '%',
    trend: 'down',
    trendValue: '-2.1%',
    icon: 'CheckCircle2',
    color: 'warning',
    sparklineData: [75, 76, 74, 73, 74, 73, 72]
  }]
  );

  const [challenges] = useState([
  {
    id: 'ch1',
    title: '10K Steps Daily Challenge',
    description: 'Walk 10,000 steps every day for 30 days',
    status: 'active',
    participants: 342,
    goal: 10000,
    unit: 'steps',
    topPerformers: [
    {
      id: 'u1',
      name: 'Sarah Johnson',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_18811c304-1763296452128.png",
      avatarAlt: 'Professional woman with blonde hair in business attire smiling at camera',
      score: 12450
    },
    {
      id: 'u2',
      name: 'Michael Chen',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_144f5236b-1763295524542.png",
      avatarAlt: 'Asian man with short black hair wearing casual blue shirt outdoors',
      score: 11890
    },
    {
      id: 'u3',
      name: 'Emily Rodriguez',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_127e35b32-1763295517666.png",
      avatarAlt: 'Hispanic woman with long brown hair in red top with warm smile',
      score: 11230
    }]

  },
  {
    id: 'ch2',
    title: 'Hydration Hero Challenge',
    description: 'Drink 8 glasses of water daily for better health',
    status: 'active',
    participants: 289,
    goal: 8,
    unit: 'glasses',
    topPerformers: [
    {
      id: 'u4',
      name: 'David Kim',
      avatar: "https://images.unsplash.com/photo-1558356811-8e77884f44d3",
      avatarAlt: 'Young Asian man with glasses wearing white t-shirt in bright setting',
      score: 9.2
    },
    {
      id: 'u5',
      name: 'Jessica Martinez',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1f0ba6aa0-1767706220330.png",
      avatarAlt: 'Woman with curly brown hair in green sweater with friendly expression',
      score: 8.8
    },
    {
      id: 'u6',
      name: 'Robert Taylor',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_19b00e0ce-1763292994800.png",
      avatarAlt: 'Middle-aged man with gray hair in navy blazer professional headshot',
      score: 8.5
    }]

  },
  {
    id: 'ch3',
    title: 'Meditation Mindfulness',
    description: 'Practice 15 minutes of meditation daily',
    status: 'active',
    participants: 156,
    goal: 15,
    unit: 'minutes',
    topPerformers: [
    {
      id: 'u7',
      name: 'Amanda White',
      avatar: "https://images.unsplash.com/photo-1537044930158-051501d7146b",
      avatarAlt: 'Woman with short blonde hair in purple top with calm demeanor',
      score: 22
    },
    {
      id: 'u8',
      name: 'James Wilson',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1f08f4a30-1763296200964.png",
      avatarAlt: 'Man with brown hair and beard in gray shirt outdoors natural light',
      score: 20
    },
    {
      id: 'u9',
      name: 'Lisa Anderson',
      avatar: "https://images.unsplash.com/photo-1653648857401-ccf5c6cbba3d",
      avatarAlt: 'Young woman with red hair in yellow dress with bright smile',
      score: 18
    }]

  },
  {
    id: 'ch4',
    title: 'Healthy Eating Streak',
    description: 'Log 5 servings of fruits and vegetables daily',
    status: 'active',
    participants: 412,
    goal: 5,
    unit: 'servings',
    topPerformers: [
    {
      id: 'u10',
      name: 'Christopher Lee',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_103702769-1763301708118.png",
      avatarAlt: 'Asian man with short hair in black polo shirt professional setting',
      score: 6.8
    },
    {
      id: 'u11',
      name: 'Maria Garcia',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_134df4377-1763293438760.png",
      avatarAlt: 'Hispanic woman with long dark hair in white blouse warm expression',
      score: 6.5
    },
    {
      id: 'u12',
      name: 'Daniel Brown',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_149216793-1763296002470.png",
      avatarAlt: 'Man with short brown hair in blue button-down shirt casual setting',
      score: 6.2
    }]

  },
  {
    id: 'ch5',
    title: 'Sleep Quality Challenge',
    description: 'Achieve 7-8 hours of quality sleep nightly',
    status: 'active',
    participants: 278,
    goal: 8,
    unit: 'hours',
    topPerformers: [
    {
      id: 'u13',
      name: 'Sophia Turner',
      avatar: "https://images.unsplash.com/photo-1666980076205-5e3d6fb80825",
      avatarAlt: 'Woman with blonde hair in pink top with peaceful expression',
      score: 8.4
    },
    {
      id: 'u14',
      name: 'Matthew Davis',
      avatar: "https://images.unsplash.com/photo-1577085536281-4a72d079c8e8",
      avatarAlt: 'Man with dark hair and stubble in gray sweater relaxed pose',
      score: 8.2
    },
    {
      id: 'u15',
      name: 'Olivia Moore',
      avatar: "https://images.unsplash.com/photo-1717807670946-c793b0dc6392",
      avatarAlt: 'Young woman with brown hair in blue top with gentle smile',
      score: 8.0
    }]

  },
  {
    id: 'ch6',
    title: 'Strength Training Week',
    description: 'Complete 3 strength training sessions per week',
    status: 'active',
    participants: 195,
    goal: 3,
    unit: 'sessions',
    topPerformers: [
    {
      id: 'u16',
      name: 'Ryan Thompson',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e97c42a9-1763296462790.png",
      avatarAlt: 'Athletic man with short hair in black tank top gym setting',
      score: 5
    },
    {
      id: 'u17',
      name: 'Emma Harris',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1366b3a26-1768627336863.png",
      avatarAlt: 'Fit woman with ponytail in sports attire energetic expression',
      score: 4
    },
    {
      id: 'u18',
      name: 'Kevin Martinez',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e3334ac0-1763293632706.png",
      avatarAlt: 'Young man with short dark hair in red athletic shirt confident look',
      score: 4
    }]

  },
  {
    id: 'ch7',
    title: 'Yoga Flow Challenge',
    description: 'Practice yoga for 20 minutes daily',
    status: 'active',
    participants: 223,
    goal: 20,
    unit: 'minutes',
    topPerformers: [
    {
      id: 'u19',
      name: 'Rachel Green',
      avatar: "https://images.unsplash.com/photo-1675339740585-af4686867141",
      avatarAlt: 'Woman with long brown hair in purple yoga outfit serene expression',
      score: 28
    },
    {
      id: 'u20',
      name: 'Brandon Scott',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_19254133b-1765314260906.png",
      avatarAlt: 'Man with short hair in gray athletic wear focused demeanor',
      score: 25
    },
    {
      id: 'u21',
      name: 'Nicole Adams',
      avatar: "https://images.unsplash.com/photo-1599557852959-f1ebc5cc260e",
      avatarAlt: 'Young woman with blonde hair in teal top peaceful smile',
      score: 24
    }]

  },
  {
    id: 'ch8',
    title: 'Screen Time Reduction',
    description: 'Limit recreational screen time to 2 hours daily',
    status: 'active',
    participants: 167,
    goal: 2,
    unit: 'hours',
    topPerformers: [
    {
      id: 'u22',
      name: 'Tyler Nelson',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_149216793-1763296002470.png",
      avatarAlt: 'Man with short brown hair in casual plaid shirt relaxed setting',
      score: 1.5
    },
    {
      id: 'u23',
      name: 'Hannah Clark',
      avatar: "https://images.unsplash.com/photo-1650146546229-9f4a798fa03d",
      avatarAlt: 'Woman with red hair in green cardigan with warm smile',
      score: 1.7
    },
    {
      id: 'u24',
      name: 'Justin Wright',
      avatar: "https://images.unsplash.com/photo-1616064987986-e339fa40da32",
      avatarAlt: 'Young man with short hair in blue hoodie casual expression',
      score: 1.8
    }]

  },
  {
    id: 'ch9',
    title: 'Gratitude Journaling',
    description: 'Write 3 things you are grateful for daily',
    status: 'active',
    participants: 134,
    goal: 3,
    unit: 'entries',
    topPerformers: [
    {
      id: 'u25',
      name: 'Megan Lewis',
      avatar: "https://images.unsplash.com/photo-1587590674241-48e92d877084",
      avatarAlt: 'Woman with curly brown hair in orange top with joyful expression',
      score: 5
    },
    {
      id: 'u26',
      name: 'Andrew Hall',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_147b0d4fa-1763294694248.png",
      avatarAlt: 'Man with short hair and glasses in white shirt professional look',
      score: 4
    },
    {
      id: 'u27',
      name: 'Victoria King',
      avatar: "https://images.unsplash.com/photo-1732549681200-fe515b7d22dc",
      avatarAlt: 'Young woman with long blonde hair in pink blouse bright smile',
      score: 4
    }]

  },
  {
    id: 'ch10',
    title: 'Social Connection Challenge',
    description: 'Have meaningful conversations with 2 people daily',
    status: 'active',
    participants: 198,
    goal: 2,
    unit: 'conversations',
    topPerformers: [
    {
      id: 'u28',
      name: 'Joshua Baker',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_122d14b14-1763296664562.png",
      avatarAlt: 'Man with short dark hair in navy shirt friendly demeanor',
      score: 3
    },
    {
      id: 'u29',
      name: 'Samantha Hill',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_188057f3f-1764851725587.png",
      avatarAlt: 'Woman with brown hair in yellow top with engaging smile',
      score: 3
    },
    {
      id: 'u30',
      name: 'Eric Young',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_149216793-1763296002470.png",
      avatarAlt: 'Young man with short hair in gray t-shirt casual setting',
      score: 2
    }]

  },
  {
    id: 'ch11',
    title: 'Nature Walk Challenge',
    description: 'Spend 30 minutes outdoors in nature daily',
    status: 'active',
    participants: 245,
    goal: 30,
    unit: 'minutes',
    topPerformers: [
    {
      id: 'u31',
      name: 'Laura Mitchell',
      avatar: "https://images.unsplash.com/photo-1696935896486-3e316f41ebba",
      avatarAlt: 'Woman with short brown hair in green jacket outdoors natural light',
      score: 45
    },
    {
      id: 'u32',
      name: 'Patrick Cooper',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1bde1eb3e-1767168052581.png",
      avatarAlt: 'Man with gray hair in blue outdoor jacket hiking setting',
      score: 42
    },
    {
      id: 'u33',
      name: 'Kimberly Reed',
      avatar: "https://images.unsplash.com/photo-1680100710399-aadb8438ddf7",
      avatarAlt: 'Young woman with long hair in purple top with adventurous smile',
      score: 38
    }]

  },
  {
    id: 'ch12',
    title: 'Reading Habit Builder',
    description: 'Read for 20 minutes before bed each night',
    status: 'active',
    participants: 187,
    goal: 20,
    unit: 'minutes',
    topPerformers: [
    {
      id: 'u34',
      name: 'Gregory Foster',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1f9f588f2-1769552411402.png",
      avatarAlt: 'Man with short hair and glasses in brown sweater intellectual look',
      score: 35
    },
    {
      id: 'u35',
      name: 'Catherine Bell',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e0df745f-1766812036689.png",
      avatarAlt: 'Woman with long dark hair in blue cardigan with thoughtful expression',
      score: 32
    },
    {
      id: 'u36',
      name: 'Nathan Ward',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_149216793-1763296002470.png",
      avatarAlt: 'Young man with short brown hair in gray shirt casual setting',
      score: 30
    }]

  }]
  );

  const [activities] = useState([
  {
    id: 'act1',
    type: 'score_update',
    message: 'Sarah Johnson just logged 12,450 steps in 10K Steps Daily Challenge!',
    timestamp: new Date(Date.now() - 120000),
    user: {
      name: 'Sarah Johnson',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_18811c304-1763296452128.png",
      avatarAlt: 'Professional woman with blonde hair in business attire smiling at camera'
    },
    challengeName: '10K Steps Daily Challenge'
  },
  {
    id: 'act2',
    type: 'new_participant',
    message: 'Alex Thompson joined Hydration Hero Challenge',
    timestamp: new Date(Date.now() - 300000),
    user: {
      name: 'Alex Thompson',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_120f8e461-1763296108823.png",
      avatarAlt: 'Man with short hair in casual blue shirt with friendly smile'
    },
    challengeName: 'Hydration Hero Challenge'
  },
  {
    id: 'act3',
    type: 'milestone',
    message: 'Emily Rodriguez reached 100-day streak milestone!',
    timestamp: new Date(Date.now() - 480000),
    user: {
      name: 'Emily Rodriguez',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_127e35b32-1763295517666.png",
      avatarAlt: 'Hispanic woman with long brown hair in red top with warm smile'
    }
  },
  {
    id: 'act4',
    type: 'challenge_completed',
    message: 'Michael Chen completed Meditation Mindfulness challenge',
    timestamp: new Date(Date.now() - 720000),
    user: {
      name: 'Michael Chen',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_144f5236b-1763295524542.png",
      avatarAlt: 'Asian man with short black hair wearing casual blue shirt outdoors'
    },
    challengeName: 'Meditation Mindfulness'
  },
  {
    id: 'act5',
    type: 'score_update',
    message: 'David Kim logged 9.2 glasses in Hydration Hero Challenge',
    timestamp: new Date(Date.now() - 900000),
    user: {
      name: 'David Kim',
      avatar: "https://images.unsplash.com/photo-1558356811-8e77884f44d3",
      avatarAlt: 'Young Asian man with glasses wearing white t-shirt in bright setting'
    },
    challengeName: 'Hydration Hero Challenge'
  },
  {
    id: 'act6',
    type: 'new_participant',
    message: 'Jennifer Lopez joined Yoga Flow Challenge',
    timestamp: new Date(Date.now() - 1200000),
    user: {
      name: 'Jennifer Lopez',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1a32a3733-1763295164509.png",
      avatarAlt: 'Woman with long dark hair in white top with confident expression'
    },
    challengeName: 'Yoga Flow Challenge'
  },
  {
    id: 'act7',
    type: 'score_update',
    message: 'Amanda White completed 22 minutes of meditation',
    timestamp: new Date(Date.now() - 1500000),
    user: {
      name: 'Amanda White',
      avatar: "https://images.unsplash.com/photo-1537044930158-051501d7146b",
      avatarAlt: 'Woman with short blonde hair in purple top with calm demeanor'
    },
    challengeName: 'Meditation Mindfulness'
  },
  {
    id: 'act8',
    type: 'milestone',
    message: 'Christopher Lee achieved 50-day healthy eating streak!',
    timestamp: new Date(Date.now() - 1800000),
    user: {
      name: 'Christopher Lee',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_103702769-1763301708118.png",
      avatarAlt: 'Asian man with short hair in black polo shirt professional setting'
    }
  }]
  );

  const handleCreateChallenge = () => {
    console.log('Create challenge clicked');
  };

  const handleExportData = () => {
    console.log('Export data clicked');
  };

  const handleViewReports = () => {
    console.log('View reports clicked');
  };

  return (
    <FilterProvider>
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Dashboard Overview - SocialWellnessTracker</title>
          <meta name="description" content="Real-time wellness challenge analytics dashboard with performance tracking, community engagement metrics, and leaderboard intelligence" />
        </Helmet>

        <PrimaryNavigation />
        <GlobalFilterControls />

        <main className="px-4 md:px-6 lg:px-8 py-6 md:py-8 max-w-[1920px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6 md:mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-foreground mb-2">
                Dashboard Overview
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Real-time insights into challenge performance and community engagement
              </p>
            </div>
            <RealtimeStatusIndicator />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            {kpiMetrics?.map((metric) =>
            <KPIMetricCard key={metric?.id} {...metric} />
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            <div className="lg:col-span-9 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl md:text-2xl font-heading font-semibold text-foreground">
                  Active Challenges
                </h2>
                <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-smooth">
                  <Icon name="Grid" size={16} />
                  <span className="hidden md:inline">Grid View</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {challenges?.map((challenge) =>
                <ChallengeWidget key={challenge?.id} challenge={challenge} />
                )}
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <LiveActivityFeed activities={activities} />
              <QuickActionPanel
                onCreateChallenge={handleCreateChallenge}
                onExportData={handleExportData}
                onViewReports={handleViewReports} />

            </div>
          </div>
        </main>
      </div>
    </FilterProvider>);

};

export default MainDashboardOverview;
