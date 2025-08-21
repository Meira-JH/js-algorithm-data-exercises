// Here is the enunciation for the "Angry Professor" challenge from HackerRank:

// A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, the professor decides to cancel class if fewer than k students are present when class starts. Arrival times go from on time (arrival time ≤ 0) to late (arrival time > 0).

// Given the arrival times for each student, determine if the class is cancelled.

// Function Description

// Complete the angryProfessor function.

// angryProfessor has the following parameters:
// int k: the threshold number of students
// int a[n]: the arrival times of the n students
// Returns

// string: "YES" if the class is cancelled, "NO" otherwise
// Input Format

// The first line contains an integer, t, the number of test cases. Each test case consists of two lines:

// The first line has two space-separated integers, n (number of students) and k (threshold).
// The second line contains n space-separated integers, a[i] (arrival times).
// Sample input
// 2
// 4 3
// -1 -3 4 2
// 4 2
// 0 -1 2 1

export const angryProfessorMock = { k: 3, a: [-1, -3, 4, 2] };

export function angryProfessor(k, a) {
  const studentsThreshold = k;
  const arrayOfStudentsPunctuality = a;
  let punctualStudentsCount = 0;

  for (let i = 0; i < arrayOfStudentsPunctuality.length; i++) {
    const isStudentLate = arrayOfStudentsPunctuality[i] > 0;

    if (!isStudentLate) {
      punctualStudentsCount++;
    }
  }

  if (punctualStudentsCount >= studentsThreshold) {
    console.log('NO');

    return 'NO';
  } else {
    console.log('YES');

    return 'YES';
  }
}
