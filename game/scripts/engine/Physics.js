export default {
    applyGravity(entity, groundY) {
        entity.velocity.y += entity.gravity;
        entity.position.y += entity.velocity.y;

        if (entity.position.y + entity.height >= groundY) {
            entity.position.y = groundY - entity.height;
            entity.velocity.y = 0;
            entity.onGround = true;
        }
    }
};