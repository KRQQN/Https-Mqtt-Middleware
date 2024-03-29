import express from 'express';
import authenticateToken from '../../middleware/jwtValidator.ts';

// Router is used to group routes into modular units.
const edgeRouter = express.Router();

// Jwt-validator middleware acts on all routes in this file.
// If it should be used for all endpoints it could be added induvidually as second argument.
// E.g thisRouter.get('/endpoint/url', authenticateToken, handlerFunction)
edgeRouter.use(authenticateToken);

// TODO: Create routehandlers
edgeRouter.post('/:MAC/scan', edgeScanHandler);
edgeRouter.post('/:MAC/settings', edgeSettingsHandler);
edgeRouter.get('/:MAC/start_pub', edgeStartPubHandler);
edgeRouter.get('/:MAC/purge_database', edgePurgeDatabaseHandler);
edgeRouter.post('/:ID/location', edgeLocationHandler);
edgeRouter.post('/:ID/customer', edgeCustomerHandler);

export default edgeRouter;
