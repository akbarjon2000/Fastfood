import React from 'react'
import BranchNav from './branchNav/BranchNav'
import BranchBody from './branchBody'
import { Container } from './style'
const Branches = () => {
    return (
        <Container  >
            <BranchNav />
            <BranchBody />
        </Container>
    )
}
export default Branches;