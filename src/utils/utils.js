
const calculateScore = (easyQuestions,mediumQuestions,hardQuestions,totalEasyQuestions,totalMediumQuestions,totalHardQuestions) =>{
    let easyScore = easyQuestions * 0.3
    let mediumScore = mediumQuestions * 0.5
    let hardScore = hardQuestions * 1

    let scoreSum = easyScore + mediumScore + hardScore
    let totalQuestions = totalEasyQuestions + totalMediumQuestions + totalHardQuestions

    let finalVal = parseInt((totalQuestions / scoreSum)/3)

    if(scoreSum < finalVal){
        return 0
    }
    if(scoreSum < finalVal*2){
        return 1
    }
    if(scoreSum < finalVal*3){
        return 2
    }
    return 0
}

export const fetchUserProfile = async (username) => {
  const url = 'https://leetcode.com/graphql/';
  const endpoint = 'https://leetcode.com/' + username + '/';

  const query = `query getUserProfile($username: String!) {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: $username) {
      contributions {
        points
      }
      profile {
        reputation
        ranking
      }
      submissionCalendar
      submitStats {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
        totalSubmissionNum {
          difficulty
          count
          submissions
        }
      }
    }
  }`;

  const requestBody = JSON.stringify({
    query,
    variables: { username },
  });

  const headers = {
    'Content-Type': 'application/json',
    'referer': endpoint,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: requestBody,
    });

    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};


export const getData = async (username) =>{

    try {
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
        if(response == null){
            throw new Error("something went wrong")
        }
        const data = await response.json()
        const {easySolved,mediumSolved,hardSolved,totalEasy,totalMedium,totalHard} = data
        const score = calculateScore(easySolved,mediumSolved,hardSolved,totalEasy,totalMedium,totalHard)

        return {data,score}

    } catch (error) {
         console.error('Error:', error);
        return null;
    }

}
