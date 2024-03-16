import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { format } from 'date-fns';

const ContributionGraph = ({ userData }) => {
  const [contributionsData, setContributionsData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContributions = async () => {
      const accessToken = '';
      try {
        const response = await fetch(`https://api.github.com/users/${userData.login}/events`, {
          headers: {
            Authorization: `token ${accessToken}`
          }
        });
        if (response.ok) {
          const eventData = await response.json();
          const contributions = eventData.filter(event => event.type === 'PushEvent' || event.type === 'PullRequestEvent');
          const groupedContributions = groupContributionsByDate(contributions);
          setContributionsData(groupedContributions);
        } else {
          setError(`Failed to fetch contributions: ${response.status}`);
        }
      } catch (error) {
        setError(`Error fetching contributions: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [userData.login]);

  const groupContributionsByDate = (contributions) => {
    const groupedData = {};
    contributions.forEach(contribution => {
      const date = format(new Date(contribution.created_at), 'yyyy-MM-dd');
      groupedData[date] = (groupedData[date] || 0) + 1;
    });
    return groupedData;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const labels = Object.keys(contributionsData);
  const data = Object.values(contributionsData);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Contributions',
        data,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
          displayFormats: {
            day: 'MMM DD',
          },
        },
      },
      y: {
        beginAtZero: true,
        stepSize: 1,
      },
    },
  };

  return (
    <div>
      <h2>Contribution Graph</h2>
      <div style={{ height: '400px', width: '600px' }}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default ContributionGraph;
