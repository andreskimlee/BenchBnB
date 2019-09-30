import { connect } from "react-redux"
import { createNewUser } from '../../actions/session_actions'
import SessionForm from './SessionForm'

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: "Sign Up" 

})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(createNewUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);