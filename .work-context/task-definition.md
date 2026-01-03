# Target Objective
I want to create a web hostable UI which operates as a multi-account amortization calculator. This will enable the user to effectively plan how best to plan their payments for long term goals. 

# Key Secutity Concerns
- Account identifying details (ie: actual account numbers) will not be enterable
- Account details will never be transferred off the local system, and will always be held client side

# Account attributes
Any number of accounts may be instantiated at once.

Each account will have the following attributes:
- Nickname
- Starting Principal
- Interest Rate
- Minimum Payment

# User Flow
1. Enter all accounts of interest
2. Specify additional principal to be paid on a per account basis
3. Create amortization schedule in UI
