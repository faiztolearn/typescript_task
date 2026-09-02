/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */

type Reservation = {
    customerName: string;
    isPremiumMember: boolean;
    isRoomAvailable: boolean;
};

const reservation: Reservation = {
    customerName: "Nadia Putri",
    isPremiumMember: true,
    isRoomAvailable: false
};

if (reservation.isRoomAvailable) {
    if (reservation.isPremiumMember) {
        console.log("Free room upgrade for premium member.");
    } else {
        console.log("Reserved room only for regular customer.");
    }
} else {
    if (reservation.isPremiumMember) {
        console.log("Placed on priority waiting list for premium member.");
    } else {
        console.log("No rooms available for regular customer.");
    }
}