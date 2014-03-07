/// This script moves the character controller forward 
/// and sideways based on the arrow keys.
/// It also jumps when pressing space.
/// Make sure to attach a character controller to the same game object.
/// It is recommended that you make only one call to Move or SimpleMove per frame.    

//inspector vars	
var speed				 		: float = 6.0;
var jumpSpeed 				: float = 8.0;
var gravity 					: float = 20.0;

//private vars
private var velocity 		: Vector3 = Vector3.zero;

function Update() {
    var controller : CharacterController = GetComponent(CharacterController);
    if (controller.isGrounded) {
        // We are grounded, so recalculate
        velocity = Vector3(Input.GetAxis("Horizontal"), 0, 0);													 // move direction directly from axes
        velocity = transform.TransformDirection(velocity);														// transforms from local to world space				
        velocity *= speed;																										// multiply the movement speed by the req factor
        
        if (Input.GetButtonDown ("Jump")) {
            velocity.y = jumpSpeed;
        }
    }
    
    if (!controller.isGrounded) {
	//if not grounded, in the air we can still move left or right
	velocity.x = Input.GetAxis("Horizontal");
	velocity.x *= speed;
	}
	
    // Apply gravity
    velocity.y -= gravity * Time.deltaTime;
    
    // Move the controller
    controller.Move(velocity * Time.deltaTime);
}